<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-date"></i> 创建表单</el-breadcrumb-item>
        <el-breadcrumb-item>角色添加</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="form-box">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="表单名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="选择器">
          <el-select v-model="form.region" placeholder="请选择">
            <el-option key="bbk" label="安全" value="安全"></el-option>
            <el-option key="xtc" label="算法" value="算法"></el-option>
            <el-option key="test" label="测试" value="测试"></el-option>
            <el-option key="adc" label="广告" value="广告"></el-option>
            <el-option key="userup" label="用户增长" value="用户增长"></el-option>
            <el-option key="fengkong" label="风控" value="风控"></el-option>
            <el-option key="database" label="数据库" value="数据库"></el-option>
            <el-option key="analyst" label="国内分析师" value="国内分析师"></el-option>
            <el-option key="outanalyst" label="海外分析师" value="海外分析师"></el-option>
            <el-option key="ops" label="运维" value="运维"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="文本框">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script>
  export default {
    data: function(){
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: true,
          type: [''],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        this.$message.success('提交成功！');
      }
    }
  }
</script>
