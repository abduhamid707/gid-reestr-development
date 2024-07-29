<template>
  <div class="paginate">
    
    <div class="w-a d-f fd-r gap-24">
      <button
        @click="prev()"
        class="primPaginator leftRightBtn w-2 h-48p gap-12"
        :disabled="currentPageNumber <= 1 ? true : false"
      >
        <Icons
          icon="arrLeft"
          color="#216AD7"
          size="middle"
        />
        <span>{{$t('prev')}}</span>
      </button>

      <button
        @click="next()"
        class="primPaginator leftRightBtn w-2 h-48p gap-12"
        :disabled="(currentPageNumber === pages || pages === 0) ? true : false"
      >
        <span>{{$t('next')}}</span>
        <Icons
          icon="arrRight"
          color="#216AD7"
          size="middle"
        />
      </button>
    </div>

    <div class="w-a d-f fd-r ml-a gap-96">
      <div class="w-a d-f fd-r ml-a align-c gap-24 sm-gap-12">
        <p class="colorGreyD">{{$t('page')}}</p>
        <input
          v-model="goToPage"
          type="number"
          class="pageInput w-1c"
          min="1"
          :max="this.pages"
        >
        <p class="colorGreyD">{{$t('all')}}  <span class="colorType">{{pages}}</span>  </p>
      </div>

      <div class="w-a d-f align-c">
        <button
        :disabled="!goToPage"
          @click="goingToPage()"
          class="primPaginator goToPageBtn w-2 h-48p gap-12"
        >
        <span>{{$t('go')}}</span>
        <Icons
          icon="arrRight"
          color="#216AD7"
          size="middle"
        />
      </button>
      </div>
    </div>

  </div>
</template>

<script>
import Icons from './icons.vue'

export default {
  name: 'paginateComponent',

  components: {
    Icons
  },

  data() {
    return {
      goToPage: 1,
      currentPageNumber: 1
    }
  },

  props: {
    pages: {
      type: Number,
      required: true
    },
    staticPagination: {
      type: Boolean,
      required: false,
      default: false
    },
    staticCurrentPage: {
      required: false,
    }
  },

  methods: {
    goToPageChanger() {
      this.goToPage = this.currentPageNumber
    },

    async next() {
      this.goToPage ++
      await this.$router.push(
        {
          query: {
            ...this.$route.query,
            page: this.currentPageNumber + 1
          }
        }
      )
      this.$emit('next')
      this.currentPageNumber ++
    },

    async prev() {
      this.goToPage --
      await this.$router.push(
        {
          query: {
            ...this.$route.query,
            page: this.currentPageNumber - 1
          }
        }
      )
      this.$emit('prev')
      this.currentPageNumber --
    },

    async goingToPage() {
      if(this.goToPage > this.pages) {
        this.goToPage = this.pages
        await this.$router.push({
            query: {
              ...this.$route.query,
              page: this.pages
            }
          }
        )
        this.$emit('goingToPage')
        this.currentPageNumber = this.goToPage
      }
      else {
        await this.$router.push({
          query: {
            ...this.$route.query,
            page: this.goToPage
          }
        })
        this.$emit('goingToPage')
        this.currentPageNumber = this.goToPage
      }
    }
  },

  mounted() {
    this.goToPageChanger()
    if(this.$route.query.page === undefined) {
      if(this.staticPagination === false) {
        this.currentPageNumber = 1
        this.goToPage = 1
      }
      else
      this.currentPageNumber = this.staticCurrentPage
      this.goToPage = this.staticCurrentPage
    }
    else
    if(this.staticPagination === false) {
      this.currentPageNumber = Number(this.$route.query.page)
      this.goToPage = Number(this.$route.query.page)
    }
    else
    this.currentPageNumber = this.staticCurrentPage
    this.goToPage = this.staticCurrentPage
  },

  watch: {
    '$route'() {
      // this.$router.go()
    },

    goToPage() {
      if (this.goToPage < 1) {
        this.goToPage = 1
      }else if(this.goToPage > this.pages){
        this.goToPage = this.pages
      }
    }
  }
}
</script>
<style scoped>
.paginate{
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
}
.w-a{
  width: auto;
}
.primPaginator {
  display: flex;
  align-items: center;
  background: white;
  height: 48px;
  width: 220px;
  justify-content: center;
  border: 0;
  border-radius: 10px;
  color: #216AD7;
  cursor: pointer;
  border: 1px solid white;
  transition: 0.5s;
}
.primPaginator:hover {
  background-color: #f5f8ff;
  border: 1px solid #d2d8e5;
}

.primPaginator span{
  font-size: 1rem;
}
.pageInput{
  border: 0;
  outline: none;
  height: 48px;
  width: 100px;
  padding: 14px;
  display: flex;
  border-radius: 10px;
  align-items: center;
}
.colorGreyD{
  color: #7B8189;
}
.colorType{
  color: #020B18;
}
</style>