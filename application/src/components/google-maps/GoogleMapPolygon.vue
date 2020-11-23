<script>
import { LINE_PATH_CONFIG } from '@/configuration/googleMapSettings'

export default {
  name: 'GoogleMapPolygon',
  props: {
    google: {
      type: Object,
      required: true
    },
    map: {
      type: Object,
      required: true
    },
    path: {
      type: Array,
      required: true
    }
  },

  mounted() {
    new this.google.maps.Polygon({
      path: this.path,
      map: this.map,
      ...LINE_PATH_CONFIG
    })
  },
}
</script>
