var app = new Vue({
    el: "#app",
    data() {
        return {
            ifshow: true,
            
            xpspoofercheck: false,              // XP 欺骗
            galleryclickercheck: false,         // 图库答题器
            parkourcheckpointcheck: false,      // 跑酷检查站
            zeromodulescheck: false,            // 0 模块升级
            collectiblescheck: false,           // 收藏品
            blackmarketclickercheck: false,     // 黑市点击器
            lobbytaskclickercheck: false,       // 大厅任务答题器
            pixelpasstaskclickercheck: false,   // 像素传递任务点击器
            wearunlockercheck: false,           // 穿解锁器
  gadgetunlockercheck: false,         // 小工具解锁检查
  eventwearunlockercheck: false,      // 护甲解锁检查

  banaccountcheck: false,             // 封禁账号
  
            radio: '1',
            activeSelect: '',
            selectOption: [{
                value: 'Option1',
                label: 'golden'
            }, {
                value: 'Option2',
                label: 'eggs'
            }],
            input: "",
            showOption: false,
            tabValue: "one",
        }
    },
    mounted() {
        this.setRect(360, 320);
setButtonImage("https://i.ibb.co/zxYnp3D/Jie.jpg");
        setWindowDrag(0, 0, 0, 0);

        var layout = function()
        {
            if(window.lastorientation==window.orientation) return;
            window.lastorientation=window.orientation;
        
            if(Math.abs(window.orientation)==90) {
                setWindowRect(0,0,window.screen.height,window.screen.width);
            } else {
                setWindowRect(0,0,window.screen.width,window.screen.height);
            }
        }

        layout();
        window.addEventListener("orientationchange", layout, false);

        setButtonAction(function () {
            var menu = document.querySelector("#app");
            if (menu.style.display == 'none') {
                menu.style.display = 'block';
                setWindowTouch(true);
            } else {
                menu.style.display = 'none';
                setWindowTouch(false);
            }
        });
    },
    methods: {
        setRect(w, h, x = -1, y = -1) {
            var boxW = w;
            var boxH = h;

            var ayMenu = this.$refs.menuMain;
            ayMenu.style.width = `${boxW}px`;
            ayMenu.style.height = `${boxH}px`;
            if (x == -1) ayMenu.style.left = `calc(50% - ${boxW / 2}px)`;
            if (y == -1) ayMenu.style.top = `calc(50% - ${boxH / 2}px)`;
        },
        titleTouchStart(event) {
            this.touchStartX = parseInt(event.touches[0].clientX);
            this.touchStartY = parseInt(event.touches[0].clientY);

            var ayMenu = this.$refs.menuMain;
            this.menuLastX = ayMenu.offsetLeft;
            this.menuLastY = ayMenu.offsetTop;
        },
        titleTouchMove(event) {
            event.preventDefault();
            var distanceX = event.touches[0].clientX - this.touchStartX;
            var distanceY = event.touches[0].clientY - this.touchStartY;

            var ayMenu = this.$refs.menuMain;
            ayMenu.style.left = this.menuLastX + distanceX + "px";
            ayMenu.style.top = this.menuLastY + distanceY + "px";
        },
        changeTab(v) {
            this.tabValue = v;
        },
        closeimgui() {
            var menu = document.querySelector("#app");
            menu.style.display = 'none';
        },


        xpSpoofer() {
  console.log("XP 欺骗已启用");
            h5gg.require(7.8);
  if (xpspoofercheck.Vue) {
  var modules = h5gg.getRangesList("UnityFramework");
  var base = modules[0].start;
  var addr = Number(base) + 0x2D760E0;
  patchBytes(addr,  "60988452C0035FD6"); // 9,411
  function patchBytes(addr, hex) {
    for(i = 0;i<hex.length/2;i++) {
      var item = parseInt(hex.substring(i*2, i*2+2), 16);
      h5gg.setValue(addr+i,item, "U8");
      }
    }
  }else{
    var modules = h5gg.getRangesList("UnityFramework");
  var base = modules[0].start;
  var addr = Number(base) + 0x2D760E0;
  patchBytes(addr,  "F44FBEA9FD7B01A9"); 
  function patchBytes(addr, hex) {
    for(i = 0;i<hex.length/2;i++) {
      var item = parseInt(hex.substring(i*2, i*2+2), 16);
      h5gg.setValue(addr+i,item, "U8");
      }
    }
  }
        },


        galleryClicker() {
  console.log("已启用图库点击器");
            h5gg.require(7.8);
  var modules = h5gg.getRangesList("UnityFramework");
  var base = modules[0].start;
  var addr = Number(base) + 0x46B5E9C;
  patchBytes(addr,  "20008052C0035FD6"); // 1
  function patchBytes(addr, hex) {
    for(i = 0;i<hex.length/2;i++) {
      var item = parseInt(hex.substring(i*2, i*2+2), 16);
      h5gg.setValue(addr+i,item, "U8");
      }
    }
        },


        parkourCheckpoints() {
  console.log("启用跑酷");
            h5gg.require(7.8);
  var modules = h5gg.getRangesList("UnityFramework");
  var base = modules[0].start;
  var addr = Number(base) + 0x4382BDC;
  patchBytes(addr,  "60A48252C0035FD6"); // 5411
  function patchBytes(addr, hex) {
    for(i = 0;i<hex.length/2;i++) {
      var item = parseInt(hex.substring(i*2, i*2+2), 16);
      h5gg.setValue(addr+i,item, "U8");
      }
    }
        },


        zeroModules() {
  console.log("启用 0 个模块");
            h5gg.require(7.8);
  if (xpspoofercheck.Vue) {
  var modules = h5gg.getRangesList("UnityFramework");
  var base = modules[0].start;
  var addr = Number(base) + 0x3B03D5C;
  patchBytes(addr,  "00008052C0035FD6"); // 0
  function patchBytes(addr, hex) {
    for(i = 0;i<hex.length/2;i++) {
      var item = parseInt(hex.substring(i*2, i*2+2), 16);
      h5gg.setValue(addr+i,item, "U8");
      }
    }
  }else{
  var modules = h5gg.getRangesList("UnityFramework");
  var base = modules[0].start;
  var addr = Number(base) + 0x3B03D5C;
  patchBytes(addr,  "F657BDA9F44F01A9"); // 0
  function patchBytes(addr, hex) {
    for(i = 0;i<hex.length/2;i++) {
      var item = parseInt(hex.substring(i*2, i*2+2), 16);
      h5gg.setValue(addr+i,item, "U8");
      }
    }
  }
        },


        collectibles() {
  console.log("已启用收藏品");
            h5gg.require(7.8);
  var modules = h5gg.getRangesList("UnityFramework"); 
  var addr = Number(base) + 0x3AFBD0C;
  patchBytes(addr,  "60158552C0035FD6"); // 15,411
  function patchBytes(addr, hex) {
    for(i = 0;i<hex.length/2;i++) {
      var item = parseInt(hex.substring(i*2, i*2+2), 16);
      h5gg.setValue(addr+i,item, "U8");
      }
    }
        },


        blackMarket() {
  console.log("黑市点击器已启用");
            h5gg.require(7.8);
  var modules = h5gg.getRangesList("UnityFramework");
  var base = modules[0].start;
  var addr = Number(base) + 0x3E06CF8;
  patchBytes(addr,  "000080D2C0035FD6"); // 0
  function patchBytes(addr, hex) {
    for(i = 0;i<hex.length/2;i++) {
      var item = parseInt(hex.substring(i*2, i*2+2), 16);
      h5gg.setValue(addr+i,item, "U8");
      }
    }
        },

        lobbyTaskClicker() {
  console.log("已启用大厅任务点击器");
            h5gg.require(7.8);
  var modules = h5gg.getRangesList("UnityFramework");
  var base = modules[0].start;
  var addr = Number(base) + 0x387C260;
  patchBytes(addr,  "20008052C0035FD6"); // 1 bool
  function patchBytes(addr, hex) {
    for(i = 0;i<hex.length/2;i++) {
      var item = parseInt(hex.substring(i*2, i*2+2), 16);
      h5gg.setValue(addr+i,item, "U8");
      }
    }
        },

        pixelPassTaskClicker() {
  alert("它不会显示收集，但您可以单击像素通行证中的任务以获得奖励")
  console.log("像素传递任务点击器已启用");
            h5gg.require(7.8);
  var modules = h5gg.getRangesList("UnityFramework");
  var base = modules[0].start;
  var addr = Number(base) + 0x3DB622C;
  patchBytes(addr,  "00008052C0035FD6"); // 0
  function patchBytes(addr, hex) {
    for(i = 0;i<hex.length/2;i++) {
      var item = parseInt(hex.substring(i*2, i*2+2), 16);
      h5gg.setValue(addr+i,item, "U8");
      }
    }
        },

wearUnlocker() {
  console.log("启用磨损解锁器 [1]");
            h5gg.require(7.8);
  var modules = h5gg.getRangesList("UnityFramework");
  var base = modules[0].start;
  var addr = Number(base) + 0x3249C44;
  patchBytes(addr,  "80258052C0035FD6"); // 0x12c
  function patchBytes(addr, hex) {
    for(i = 0;i<hex.length/2;i++) {
      var item = parseInt(hex.substring(i*2, i*2+2), 16);
      h5gg.setValue(addr+i,item, "U8");
      }
    }        
  console.log("启用磨损解锁 [2]");
            h5gg.require(7.8);
  var modules = h5gg.getRangesList("UnityFramework");
  var base = modules[0].start;
  var addr = Number(base) + 0x3AEF450;
  patchBytes(addr,  "20008052C0035FD6"); // 1
  function patchBytes(addr, hex) {
    for(i = 0;i<hex.length/2;i++) {
      var item = parseInt(hex.substring(i*2, i*2+2), 16);
      h5gg.setValue(addr+i,item, "U8");
      }
    }
},

gadgetUnlocker() {
  console.log("小工具解锁已启用");
            h5gg.require(7.8);
  var modules = h5gg.getRangesList("UnityFramework");
  var base = modules[0].start;
  var addr = Number(base) + 0x432B790;
  patchBytes(addr,  "20008052C0035FD6"); // 1
  function patchBytes(addr, hex) {
    for(i = 0;i<hex.length/2;i++) {
      var item = parseInt(hex.substring(i*2, i*2+2), 16);
      h5gg.setValue(addr+i,item, "U8");
      }
    }
},

eventWearUnlocker() {
  console.log("护甲解锁已启用");
            h5gg.require(7.8);
  var modules = h5gg.getRangesList("UnityFramework");
  var base = modules[0].start;
  var addr = Number(base) + 0x3AE644C;
  patchBytes(addr,  "401F8052C0035FD6"); // 1
  function patchBytes(addr, hex) {
    for(i = 0;i<hex.length/2;i++) {
      var item = parseInt(hex.substring(i*2, i*2+2), 16);
      h5gg.setValue(addr+i,item, "U8");
      }
    }
},

banAccount() {
  let confirmation = confirm("您确定要禁止您的帐户吗?这操作是永久性的,你的帐户将无法访问.注意,您的帐户一旦被删除或禁止,您将无法恢复您的帐户.");
  if (confirmation) {
    console.log("确认");
    alert("最后的警告!确定后,你的帐户将被禁止!不能取消确认禁止.");
    this.banaccountcheck = true;
    h5gg.searchNumber("69", "F32", "0x00000000", "0x200000000");
    h5gg.editAll("1", "F32");
    console.log("禁止");
  } else {
    this.banaccountcheck = false;
    exit;
  }
}
}
});