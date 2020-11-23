<template>
  <GoogleMapLoader :mapConfig="mapConfig" :apiKey="apiKey">
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
import StationsService from "@/services/stations";

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
      defaultLocation: { lat: 50.11505, lng: 8.625609 },
    };
  },

  computed: {
    mapConfig() {
      return {
        ...mapSettings,
        center: this.defaultLocation,
      };
    }
  },

  created() {
    if (!("geolocation" in navigator)) {
      console.warn("Geo location is not supported.");

      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.defaultLocation = { lat: position.coords.latitude, lng: position.coords.longitude };
      },
      (error) => {
        console.error(error);
      }
    );
  },

  mounted() {
    StationsService.get()
      .then((response) => {
        this.lines = [];
        this.markers = [];

        response.data.map((stations) => {
          this.lines.push({
            id: stations.id,
            path: stations.paths,
          });

          stations.markers.map((marker) => {
            this.markers.push(marker);
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
</style>
