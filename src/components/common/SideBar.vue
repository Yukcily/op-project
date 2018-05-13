<template>
  <div class="sidebar">
    <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index">
            <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
            <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
            </el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index">
            <i :class="item.icon"></i>{{ item.title }}
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            icon: 'el-icon-menu',
            index: '1',
            title: '创建表单',
            subs: [
              {
                index: 'applypermission',
                title: '表权限申请'
              },
              {
                index: 'roleorder',
                title: '角色添加'
              }
            ]
          },
          {
            icon: 'el-icon-date',
            index: 'audittable',
            title: '审核表单',
          },
          {
            icon: 'el-icon-star-on',
            index: 'alltable',
            title: '全部工单'
          }
        ]
      }
    },
    computed:{
      onRoutes(){
        return this.$route.path.replace('/','');
      }
    }
  }
</script>

<style scoped>
  .sidebar{
    display: block;
    position: absolute;
    width: 250px;
    left: 0;
    top: 70px;
    bottom:0;
    background: #2E363F;
  }
  .sidebar > ul {
    height:100%;
  }
</style>
