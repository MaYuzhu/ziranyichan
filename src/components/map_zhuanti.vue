<template>

    <div id="map" ref="rootmap">
      <p @click="close(true)" v-show="!layers_show" class="layers_list_but">图层</p>
      <div class="layers_list_wrap" v-show="layers_show">
        <div class="layers_list_header">
          <p @click="close(false)">图层</p>
          <i @click="close(false)" class="icon iconfont icon-guanbi1"></i>
        </div>
        <ul class="layers_list">
          <li v-for="(item,index) in map_url" :key="index" >
            <mt-switch v-model="value[index]" @change="layersSw(index)"></mt-switch>
            <span>{{item.name}}</span>
          </li>
        </ul>
      </div>
    </div>

</template>

<script>
  import { Switch } from 'mint-ui'
  var url1 = 'https://geohey.com/s/dataviz/cebf8b019093606fe6191264cc6af5d5/' +
    '{z}/{x}/{y}.png?ak=OGJkMGQwNTVlNzYzNDA0NmIwNDYxZDY4YjQwYmJlYzc&retina=@2x';
  var url2 = 'https://geohey.com/s/dataviz/d621ce86de8d9e7a5621a58b387f6fed/' +
    '{z}/{x}/{y}.png?ak=OGJkMGQwNTVlNzYzNDA0NmIwNDYxZDY4YjQwYmJlYzc&retina=@2x';
  var url3 = 'https://geohey.com/s/dataviz/caf58d1ee1ebf353f2981c8daf10104c/' +
    '{z}/{x}/{y}.png?ak=OGJkMGQwNTVlNzYzNDA0NmIwNDYxZDY4YjQwYmJlYzc&retina=@2x';
  var url4 = 'https://geohey.com/s/dataviz/700fe5cdfdb215b48d8e8e27fa108308/' +
    '{z}/{x}/{y}.png?ak=OGJkMGQwNTVlNzYzNDA0NmIwNDYxZDY4YjQwYmJlYzc&retina=@2x';
  var url5 = 'https://geohey.com/s/dataviz/bc83de70d2a9e13e996104f05a3c208c/' +
    '{z}/{x}/{y}.png?ak=OGJkMGQwNTVlNzYzNDA0NmIwNDYxZDY4YjQwYmJlYzc&retina=@2x';
  var url6 = 'https://geohey.com/s/dataviz/13eabf588acdfebe3655ad9857e02d89/' +
    '{z}/{x}/{y}.png?ak=OGJkMGQwNTVlNzYzNDA0NmIwNDYxZDY4YjQwYmJlYzc&retina=@2x';

  import "ol/ol.css";
  import { Map, View } from "ol";
  import TileLayer from "ol/layer/Tile";
  import OSM from "ol/source/OSM";
  import XYZ from "ol/source/XYZ";
  export default {
    name: "map_zhuanti",
    data() {
      return {
        map: null,
        layers:[],
        layers_jing:[],
        map_center:[
          //[102.2920,38.1691], zoom 5
          [109.9830,38.4635], //长城
          [118.1689,30.1422], //黄山
          [103.8668,13.4033], //吴哥
          [76.3775,35.9602],  //中巴
          [180,0],            //污染
          [180,0], //遗产地边界
          [180,0], //遗产危害
          [180,0], //丝路历史线路及节点
          [76.3775,35.9602],  //中巴
          [64,24],            //海上丝绸
          [76.3775,35.9602],  //一带一路城市
          [109.9830,38.4635], //敦煌
        ],
        zoom:[
          17,11.5,11,4,2.5,
          2.2,2.2,2.2,4,3,
          4,5
        ],
        value:[],
        layers_show:false
      };
    },
    props:{
      selected_layers:{
        type:Array,
        required:true
      },
      map_url:{
        type:Array,
        required:true
      },
      center_zhuanti:{
        type:Number,
        required:true
      }
      /*index_map_url:{
        type:Array,
        required:true
      }*/
    },
    mounted() {
      var vm = this
      //var mapcontainer = this.$refs.rootmap;
      var layers1 = [
        //极海
        new TileLayer({
          source: new XYZ({
            url: url1,//添加GeoHey地图
            tilePixelRatio: 2,//表示加载高清图显示
            crossOrigin:null
          })
        }),
        new TileLayer({
          source: new XYZ({
            url: url2,//添加GeoHey地图
            tilePixelRatio: 2,//表示加载高清图显示
            crossOrigin:null
          })
        }),
        new TileLayer({
          source: new XYZ({
            url: url3,//添加GeoHey地图
            tilePixelRatio: 2,//表示加载高清图显示
            crossOrigin:null
          })
        }),
        new TileLayer({
          source: new XYZ({
            url: url5,//添加GeoHey地图
            tilePixelRatio: 2,//表示加载高清图显示
            crossOrigin:null
          })
        }),
        new TileLayer({
          source: new XYZ({
            url: url6,//添加GeoHey地图
            tilePixelRatio: 2,//表示加载高清图显示
            crossOrigin:null
          })
        }),
        new TileLayer({
          source: new XYZ({
            url: url4,//添加GeoHey地图
            tilePixelRatio: 2,//表示加载高清图显示
            crossOrigin:null
          })
        }),
      ];
      //console.log(vm.center_zhuanti)
      this.map = new Map({
        target: "map",
        layers: [
          new TileLayer({
            source: new XYZ({
              url:'http://mt0.google.cn/vt/lyrs=t@131,r@227000000&hl=zh-CN&gl=cn&x={x}&y={y}&z={z}&scale=2'
              //url:'http://mt2.google.cn/vt/lyrs=y&hl=zh-CN&gl=CN&src=app&x={x}&y={y}&z={z}&s=G'//谷歌卫星地图 混合
            }),
            //source: new OSM()
          })
        ],
        view: new View({
          projection: "EPSG:4326",    //使用这个坐标系
          // center: [117.78688073,38.98251417],
          // zoom: 16
          center:vm.map_center[vm.center_zhuanti-1],
          zoom: vm.zoom[vm.center_zhuanti-1]
        })
      });

      $('.ol-zoom,.ol-attribution').css('display', 'none')
      console.log(vm.map_url)
    },
    methods:{
      //所有图层动态播放
      child_map_play(time){
        let vm = this
        vm.layers = []
        for(let i=0;i<vm.selected_layers.length;i++){
          vm.layers.push(new TileLayer({
            source: new XYZ({
              url: vm.selected_layers[i].url,//添加GeoHey地图
              tilePixelRatio: 1,
              crossOrigin:null
            })
          }))
        }

        for(let i=0;i<vm.layers.length;i++){
          (function () {
            setTimeout(() => {
              //vm.map.removeLayer(layers[i-1])
              vm.map.addLayer(vm.layers[i])
            }, time*(i))
            setTimeout(() => {
              vm.map.removeLayer(vm.layers[i-1])
              setTimeout(()=>vm.map.removeLayer(vm.layers[vm.layers.length-1]),time*vm.layers.length)
            }, time*(i+0.3))
          })()
        }
      },
      //打开关闭列表
      close(x){
        let vm = this
        vm.layers_show = x
        vm.value = []
        for(let i=0;i<vm.map_url.length;i++){
          vm.value.push(false)
        }
      },
      //所有图层静态显示
      layersSw(x){
        let vm = this
        //vm.layers = []
        for(let i=0;i<vm.map_url.length;i++){
          vm.layers_jing.push(new TileLayer({
            source: new XYZ({
              url: vm.map_url[i].url,//添加GeoHey地图
              tilePixelRatio: 1,
              crossOrigin:null
            })
          }))
        }
        if(vm.value[x]){
          vm.map.addLayer(vm.layers_jing[x])
        }else{
          vm.map.removeLayer(vm.layers_jing[x])
        }

      },

    },
  };
</script>

<style lang="stylus" scoped>
  #map
    height 100%
    position relative
    .layers_list_but
      position absolute
      top 10px
      left 10px
      z-index 999
      background rgba(250, 250, 250, 0.75)
      padding 5px 10px
      font-size 16px
      cursor pointer
    .layers_list_wrap
      position absolute
      top 10px
      left 10px
      z-index 999
      width 210px
      background rgba(250, 250, 250, 0.75)
      border-radius 3px
      .layers_list_header
        display flex
        justify-content space-between
        align-items center
        height 30px
        p
          padding 5px 10px
          font-size 16px
          cursor pointer
        i
          margin-right 8px
          cursor pointer
          font-size 14px
      .layers_list
        width 210px
        padding 0 16px
        box-sizing border-box
        min-height 100px
        max-height 300px
        overflow-y auto
        li
          display flex
          margin 8px 0px
      .layers_list::-webkit-scrollbar /*滚动条整体样式*/
        width 4px    /*高宽分别对应横竖滚动条的尺寸*/
        height 4px

      .layers_list::-webkit-scrollbar-thumb /*滚动条里面小方块*/
        border-radius 5px
        -webkit-box-shadow inset 0 0 5px rgba(0,0,0,0.2)
        background rgba(0,0,0,0.2)

      .layers_list::-webkit-scrollbar-track /*滚动条里面轨道*/
        -webkit-box-shadow inset 0 0 5px rgba(0,0,0,0.2)
        border-radius 0
        background rgba(0,0,0,0.1)



</style>
