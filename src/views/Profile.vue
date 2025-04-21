<template>
    <div class="p-6 max-w-3xl mx-auto">
      <el-card>
        <div class="flex items-center space-x-4 mb-6">
          <el-avatar :size="80" :src="user.avatar" />
          <div>
            <h2 class="text-2xl font-bold">{{ user.name }}</h2>
            <p class="text-gray-600">角色：{{ roleMap[user.role] }}</p>
          </div>
        </div>
  
        <el-divider />
  
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <el-form label-position="top">
            <el-form-item label="昵称">
              <el-input v-model="user.name" placeholder="请输入昵称" />
            </el-form-item>
  
            <el-form-item label="邮箱">
              <el-input v-model="user.email" placeholder="请输入邮箱" />
            </el-form-item>
  
            <el-form-item label="角色">
              <el-select v-model="user.role" placeholder="选择角色">
                <el-option label="学生" value="student" />
                <el-option label="教师" value="teacher" />
                <el-option label="企业" value="company" />
              </el-select>
            </el-form-item>
  
            <el-button type="primary" @click="saveProfile">保存信息</el-button>
          </el-form>
  
          <div>
            <h3 class="text-lg font-semibold mb-2">学习活跃度</h3>
            <el-progress :percentage="user.progress" status="success" />
            <p class="mt-2 text-gray-500">上次登录：{{ user.lastLogin }}</p>
  
            <el-divider />
  
            <el-button type="danger" @click="logout">退出登录</el-button>
          </div>
        </div>
      </el-card>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { ElMessage } from 'element-plus'
  
  const user = ref({
    name: '小明',
    email: 'xiaoming@example.com',
    role: 'student',
    avatar: 'https://avatars.githubusercontent.com/u/9919?s=280&v=4', // 示例头像
    progress: 76,
    lastLogin: '2025-04-20 13:44',
  })
  
  const roleMap = {
    student: '学生',
    teacher: '教师',
    company: '企业',
  }
  
  const saveProfile = () => {
    // 实际应用中应调用后端 API 保存
    ElMessage.success('资料保存成功！')
  }
  
  const logout = () => {
    // 清除登录信息
    ElMessage.info('已退出登录')
    // 例如：localStorage.clear()
    // router.push('/login')
  }
  </script>
  
  <style scoped>
  .el-card {
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }
  </style>
  