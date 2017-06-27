<script>
  import AddItemComponent from './components/AddItemComponent.vue'
  import ItemsComponent from './components/ItemsComponent.vue'
  import ChangeTitleComponent from './components/ChangeTitleComponent.vue'

  export default {
    components:{
      AddItemComponent, ItemsComponent, ChangeTitleComponent
    },
    data(){
      return {
        items:[
          {text:'Bananas', checked:true},
          {text:'apple', checked:false},
        ]
      }
    },
    methods:{
      addItem(text){
        this.items.push({
          text:text,
          checked:false
        })
      }
    }
  }

</script>

<template>
  <div id="app" class="container">
    <h2>{{title}}</h2>  
    <add-item-component></add-item-component>
    <items-component></items-component>
    <div class="footer">
      <hr>
      <change-title-component></change-title-component>
    </div>
  </div>
</template>


