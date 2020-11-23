<template>
  <GoogleMapLoader
    :mapConfig="mapConfig"
    :apiKey="apiKey"
  >
    <template slot-scope="{ google, map }">
      <GoogleMapMarker
        v-for="marker in markers"
        :key="marker.position"
        :marker="marker"
        :google="google"
        :map="map"
      />
      <GoogleMapPolygon
        v-for="line in lines"
        :key="line.id"
        :path.sync="line.path"
        :google="google"
        :map="map"
      />
    </template>
  </GoogleMapLoader>
</template>

<script>
import { mapSettings } from "@/configuration/googleMapSettings";
import GoogleMapLoader from "./google-maps/GoogleMapLoader";
import GoogleMapMarker from "./google-maps/GoogleMapMarker";
import GoogleMapPolygon from "./google-maps/GoogleMapPolygon";
import StationsService from '@/services/stations'

export default {
  name: "StationsMap",
  components: {
    GoogleMapLoader,
    GoogleMapMarker,
    GoogleMapPolygon,
  },

  data() {
    return {
      apiKey: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
      markers: null,
      lines: null,
    };
  },

  computed: {
    mapConfig() {
      return {
        ...mapSettings,
        center: this.mapCenter,
      };
    },

    mapCenter() {
      // TODO needs validation if no data is present
      // Try to use user location
      return { lat: 50.11505, lng: 8.625609 };
    },
  },

  mounted() {
    let $vm = this;

    StationsService.get().then(function(response) {
      $vm.lines = [];
      $vm.markers = [];
      response.data.map(function(stations) {
        $vm.lines.push({
          id: stations.id,
          path: stations.paths,
        });
        stations.markers.map(function(marker) {
          $vm.markers.push(marker);
        });
      });
    });
  }
};
</script>

<style scoped>
</style>
