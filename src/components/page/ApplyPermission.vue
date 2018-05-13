<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-date"></i> 申请表单</el-breadcrumb-item>
        <el-breadcrumb-item>表权限申请</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="form-box">
      <el-form :model="form" :rules="rules"  label-width="80px" ref="form">
        <el-form-item label="组名字" prop="groupname">
          <el-select v-model="form.groupname" placeholder="请选择">
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
        <el-form-item label="权限赋予" prop="permissionGive" >
          <el-radio-group v-model="form.permissionGive" placeholder="请选择">
            <el-radio key="allgroup" label="全组" value="全组"></el-radio>
            <el-radio key="person" label="个人" value="个人"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="负责人" prop="leader">
          <el-input v-model="form.leader"></el-input>
        </el-form-item>
        <el-form-item label="库名字" prop="baseName">
          <el-input v-model="form.baseName"></el-input>
        </el-form-item>
        <el-form-item label="表名字" prop="tableName">
          <el-input v-model="form.tableName"></el-input>
        </el-form-item>
        <el-form-item label="是否只读" prop="onlyRead">
          <el-radio-group v-model="form.onlyRead" placeholder="请选择">
            <el-radio key="allgroup" label="只读" value="只读"></el-radio>
            <el-radio key="person" label="读写" value="读写"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="备注" prop="remarks">
          <el-input type="textarea" v-model="form.remarks"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit('form')">提交</el-button>
          <el-button @click="resetForm('form')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script>
  export default {
    data: function(){
      function validateChinese(rule, value ,callback) {
        var reg = /[\u4E00-\u9FA5]/;
        if (reg.test(value)) {
          callback(new Error('请勿输入中文'));
        } else if (value.indexOf(" ") >=0){
          callback(new Error('请勿输入空格'));
        }
      };
      return {
        form: {
          groupname: '',
          permissionGive: '',
          leader: '',
          baseName: '',
          tableName: '',
          onlyRead: '',
          remarks: '',
        },
        rules: {
          groupname: [
            { required: true, message: '请选择组', trigger: 'change' }
          ],
          permissionGive: [
            { required: true, message: '请选择权限', trigger: 'change' }
          ],
          leader: [
            { validator: validateChinese, trigger: 'blur' },
            { required: true, message: '请输入负责人', trigger: 'blur' }
          ],
          baseName: [
            { required: true, message: '请输入库名字', trigger: 'blur' }
          ],
          tableName: [
            { required: true, message: '请输入表名字', trigger: 'blur' }
          ],
          onlyRead: [
            { required: true, message: '请选择只读方式', trigger: 'change' }
          ],
        }
      }
    },
    methods: {
      onSubmit(formName) {
        this.$refs[formName].validate((valid) => {
            if (valid) {
              alert('submit!');
            } else {
              console.log('error submit!!');
              return false;
            }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
