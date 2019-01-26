<template>

    <div id="map" ref="rootmap">
    </div>

</template>

<script>

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
        map_center:[
          [106.78688073,37.3174],
          [118.1689,30.1422],
          [105.3149,12.9403],
          [76.3775,35.9602],
          [180,0],
        ],
        zoom:[
          5,12,7,4,2.1
        ]
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
      console.log(vm.center_zhuanti)
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
          //center: [106.78688073,37.3174],
          center:vm.map_center[vm.center_zhuanti-1],
          zoom: vm.zoom[vm.center_zhuanti-1]
        })
      });

      $('.ol-zoom,.ol-attribution').css('display', 'none')
    },
    methods:{
      child_map_play(time){
        let vm = this
        let x
        vm.layers = []
        for(let i=0;i<vm.selected_layers.length;i++){
          vm.layers.push(new TileLayer({
            source: new XYZ({
              url: vm.selected_layers[i].url,//添加GeoHey地图
              tilePixelRatio: 2,//表示加载高清图显示
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
            x = setTimeout(() => {
              vm.map.removeLayer(vm.layers[i-1])
              setTimeout(()=>vm.map.removeLayer(vm.layers[vm.layers.length-1]),time*vm.layers.length)
            }, time*(i+0.3))
          })()
        }
      },
    },
  };
</script>

<style lang="stylus" scoped>
  #map{height:100%;}
</style>
