let app = new Vue({
  el:"#app",
  data: {
    addUrl:"",
    urls:[]
  },
  methods:{
    addUrls:function(){
      this.urls.push(this.addUrl);
      chrome.storage.local.set({m_tab:this.urls});
      this.addUrl = "";
    },

    createTab:function(){
      this.urls.forEach(function(url){
        chrome.tabs.create({url: url, active: false});
      });
    },

    deleteUrl:function(url){
      this.urls = this.urls.filter((ur) => ur !== url);
      chrome.storage.local.set({m_tab:this.urls});
    }
  },
  created:function(){
    chrome.storage.local.get(["m_tab"], (data)=>{
      this.urls = data.m_tab;
    });
  }
});
