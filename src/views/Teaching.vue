<template>
    <div class="p-6 space-y-6">
      <!-- 课程设计工具 -->
      <el-card>
        <h2 class="text-xl font-bold mb-4">📚 课程设计工具</h2>
        <el-form label-width="120px">
          <el-form-item label="案例名称">
            <el-input v-model="caseName" placeholder="如：支付超时事故复盘" />
          </el-form-item>
          <el-form-item label="关联知识点">
            <el-input v-model="knowledgePoints" placeholder="如：分布式事务、幂等性" />
          </el-form-item>
          <el-button type="primary" @click="addCase">添加案例</el-button>
        </el-form>
        <ul class="mt-4 list-disc pl-6">
          <li v-for="(item, index) in courseCases" :key="index">
            {{ item.name }} - 知识点：{{ item.knowledge }}
          </li>
        </ul>
      </el-card>
  
      <!-- 学生监控面板 -->
      <el-card>
        <h2 class="text-xl font-bold mb-4">🧑‍🎓 学生监控面板</h2>
        <el-table :data="studentList" border stripe>
          <el-table-column prop="name" label="学生" />
          <el-table-column prop="score" label="代码质量评分" />
          <el-table-column prop="errorStats" label="常见错误类型" />
          <el-table-column label="实践对比">
            <template #default="scope">
              <el-button size="small" @click="compareWithBest(scope.row)">查看对比</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
  
      <!-- 学术资源整合 -->
      <el-card>
        <h2 class="text-xl font-bold mb-4">📖 学术资源整合</h2>
        <el-input v-model="paperQuery" placeholder="输入关键词查找论文（如：SQL优化）" class="mb-2" />
        <el-button @click="searchPapers">搜索</el-button>
        <ul class="mt-4 list-disc pl-6">
          <li v-for="(paper, index) in paperList" :key="index">{{ paper }}</li>
        </ul>
      </el-card>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const caseName = ref('')
  const knowledgePoints = ref('')
  const courseCases = ref([])
  
  const addCase = () => {
    if (caseName.value && knowledgePoints.value) {
      courseCases.value.push({ name: caseName.value, knowledge: knowledgePoints.value })
      caseName.value = ''
      knowledgePoints.value = ''
    }
  }
  
  const studentList = ref([
    { name: '张三', score: '85', errorStats: 'N+1 查询问题、空指针' },
    { name: '李四', score: '92', errorStats: '索引缺失、死锁' }
  ])
  
  const compareWithBest = (student) => {
    alert(`${student.name} 的代码将与企业最佳实践进行对比分析。`)
  }
  
  const paperQuery = ref('')
  const paperList = ref([])
  const searchPapers = () => {
    if (paperQuery.value) {
      paperList.value = [
        `《${paperQuery.value}优化策略研究》`,
        `《${paperQuery.value}在实际系统中的应用》`,
        `《高校教学中${paperQuery.value}案例分析》`
      ]
    }
  }
  </script>
  
  <style scoped>
  </style>
  