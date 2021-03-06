import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/page/home'
import CloudCompute from '@/page/cloudCompute'
import PhysicaMachineEnv from '../page/cloudCompute/compute/physicalMachineEnv.vue'
import VirtualMachineEnv from '../page/cloudCompute/compute/virtualMachineEnv.vue'
import K8SContainerEnv from '../page/cloudCompute/compute/k8sContainerEnv.vue'
import newCreate from '../page/cloudCompute/compute/newCreate.vue'
import newCreateK8SCluster from '../page/cloudCompute/compute/newCreateK8SCluster.vue'
import infoDetail from '../page/cloudCompute/compute/infoDetail.vue'
import MessosEnv from '../page/cloudCompute/compute/messosEnv.vue'
import YarnEnv from '../page/cloudCompute/compute/yarnEnv.vue'
import ObjectStorage from '../page/cloudCompute/storage/objectStorage.vue'
import BlockStorage from '../page/cloudCompute/storage/blockStorage.vue'
import ShareStorage from '../page/cloudCompute/storage/shareStorage.vue'
import Network from '../page/cloudCompute/network.vue'
import RelationDatabase from '../page/serviceMangement/databaseService/relationDatabase.vue'
import CreateMysql from '../page/serviceMangement/databaseService/createMysql.vue'
import Zookeeper from '../page/serviceMangement/zookeeper.vue'
import Redis from '../page/serviceMangement/redis.vue'
import Kafka from '../page/serviceMangement/kafka.vue'
import Flume from '../page/serviceMangement/flume.vue'
import Nginx from '../page/serviceMangement/ngix.vue'
import LoadBalance from '../page/serviceMangement/middleWare/loadBalance.vue'
import CreateLoadBalance from '../page/serviceMangement/middleWare/createLoadBalance.vue'
import MonitorSet from '../page/serviceMangement/middleWare/monitorSet.vue'
import MicroServiceApply from '../page/applicationMangement/microServiceApply.vue'
import CreateMicroServiceApply from '../page/applicationMangement/createMicroServiceApply.vue'
import BatchProcessApply from '../page/applicationMangement/batchProcessApply.vue'
import CreateBatchProcessApply from '../page/applicationMangement/createBatchProcessApply.vue'
import GeneralApply from '../page/applicationMangement/generalApply.vue'
import CreateGeneralApply from '../page/applicationMangement/createGeneralApply.vue'
import ProcessScheduleApply from '../page/applicationMangement/processScheduleApply.vue'
import ApiRegister from '../page/apiMangement/apiRegister.vue'
import ApiTest from '../page/apiMangement/apiTest.vue'
import PoliceSecurity from '../page/solution/bigData/policeSecurity.vue'
import Traffic from '../page/solution/bigData/traffic.vue'
import DatabaseMirror from '../page/mirrorAndAssetMarkets/databaseMirror.vue'
import BaseMirror from '../page/mirrorAndAssetMarkets/BaseMirror.vue'
import Log from '../page/managementAndMonitor/log.vue'
import HelpAndSupport from '../page/helpAndSupport/helpAndSupport.vue'
import Login from '../page/login.vue'
import ConsolePage from  '../page/console/consolePage.vue'
import ColonyInfo from '../page/console/colonyInfo.vue'
import BusinessCenterInfo from '../page/console/businessCenterInfo.vue'
import ApplicationInfo from '../page/console/applicationInfo.vue'
import ServiceInfo from '../page/console/serviceInfo.vue'
import Main from '../page/main.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {
	    path: '',
        redirect: '/login'
    },
    {
        path:'/login',
        name:'Login',
        component:Login
    },

    {
        path:'/main',
        name:'Main',
        component:Main,
        children:[
           {
                path:'/home',
                name:'Home',
                component: Home
           },
           //云计算
            {
                path:'/cloudCompute',
                name:'CloudCompute',
                component:CloudCompute
            },
            //物理机环境
            {
                path:'/cloudCompute/compute/physicalMachineEnv',
                name:'PhysicaMachineEnv',
                component:PhysicaMachineEnv
            },
            //虚拟机环境
            {
                path:'/cloudCompute/compute/virtualMachineEnv',
                name:'VirtualMachineEnv',
                component:VirtualMachineEnv
            },
            //k8s容器环境
            {
                path:'/cloudCompute/compute/k8sContainerEnv',
                name:'K8SContainerEnv',
                component:K8SContainerEnv
            },
            //新建域
            {
                path:'/cloudCompute/compute/newCreate',
                name:'newCreate',
                component:newCreate
            },
            //新建K8S集群
            {
                path:'/cloudCompute/compute/newCreateK8SCluster',
                name :'newCreateK8SCluster',
                component:newCreateK8SCluster
            },
            //域的详细信息
            {
                path:'/cloudCompute/compute/infoDetail',
                name:'infoDetail',
                component:infoDetail
            },
            //Messos环境
            {
                path:'/cloudCompute/compute/messosEnv',
                name:'MessosEnv',
                component: MessosEnv
            },
            //yarn环境
            {
                path:'/cloudCompute/compute/yarnEnv',
                name:'YarnEnv',
                component:YarnEnv
            },
            //对象存储
            {
               path:'/cloudCompute/storage/objectStorage',
               name:'ObjectStorage',
               component:ObjectStorage
            },
            //共享存储
            {
               path:'/cloudCompute/storage/shareStorage',
               name:'ShareStorage',
               component:ShareStorage
            },
            //块存储
            {
               path:'/cloudCompute/storage/blockStorage',
               name:'BlockStorage',
               component:BlockStorage
            },
            //网络
            {
                path:'/cloudCompute/network',
                name:'Network',
                component:Network
            },
            //关系数据库
            {
                path:'/databaseService/relationDatabase',
                name:'RelationDatabase',
                component:RelationDatabase
            },
             //创建关系数据库mysql
            {
                path:'/databaseService/createMysql',
                name:'CreateMysql',
                component:CreateMysql
            },
            //zookeeper
            {
                path:'/serviceMangement/zookeeper',
                name:'Zookeeper',
                component:Zookeeper
            },
            //ngix
            {
                path:'/serviceMangement/nginx',
                name:'Nginx',
                component:Nginx
            },
            //redis
            {
                path:'/serviceMangement/redis',
                name:'Redis',
                component:Redis
            },
            //redis
            {
                path:'/serviceMangement/kafka',
                name:'Kafka',
                component:Kafka
            },
            //flume
            {
                path:'/serviceMangement/flume',
                name:'Flume',
                component:Flume
            },
            //微服务应用
            {
                path:'/applicationMangement/microServiceApply',
                name:'MicroServiceApply',
                component:MicroServiceApply
            },
            //创建微服务应用
            {
                path:'/applicationMangement/createMicroServiceApply',
                name:'CreateMicroServiceApply',
                component:CreateMicroServiceApply
            },
               //流程调度应用
            {
                path:'/applicationMangement/processScheduleApply',
                name:'ProcessScheduleApply',
                component:ProcessScheduleApply
            },
             //批处理应用
            {
                path:'/applicationMangement/batchProcessApply',
                name:'BatchProcessApply',
                component:BatchProcessApply
            },
             //创建批处理应用
            {
                path:'/applicationMangement/createBatchProcessApply',
                name:'CreateBatchProcessApply',
                component:CreateBatchProcessApply
            },
             //普通应用
            {
                path:'/applicationMangement/generalApply',
                name:'GeneralApply',
                component:GeneralApply
            },
            //创建普通应用
            {
                path:'/applicationMangement/createGeneralApply',
                name:'CreateGeneralApply',
                component:CreateGeneralApply
            },
            //API注册
            {
                path:'/apiMangement/apiRegister',
                name:'ApiRegister',
                component:ApiRegister
            },
            //api测试
            {
                path:'/apiMangement/apiTest',
                name:'ApiTest',
                component:ApiTest
            },
            //公安安防
            {
                path:'/solution/bigData/policeSecurity',
                name:'PoliceSecurity',
                component:PoliceSecurity
            },
            //交通
            {
                path:'/solution/bigData/traffic',
                name:'Traffic',
                component:Traffic
            },
            //数据库镜像
            {
                path:'/mirrorAndAssetMarkets/databaseMirror',
                name:'DatabaseMirror',
                component:DatabaseMirror
            },
           //基础镜像
           {
            path:'/mirrorAndAssetMarkets/BaseMirror',
            name:'BaseMirror',
            component:BaseMirror
           },
            //日志
            {
                path:'/managementAndMonitor/Log',
                name:'Log',
                component:Log
            },
          //负载均衡
          {
            path:'/serviceMangement/Middleware/loadBalance',
            name:'LoadBalance',
            component:LoadBalance
          },
          //创建负载均衡
          {
            path:'/serviceMangement/Middleware/createLoadBalance',
            name:'CreateLoadBalance',
            component:CreateLoadBalance
          },
          {
            path:'/serviceMangement/Middleware/monitorSet',
            name:'MonitorSet',
            component:MonitorSet
          },
            //入门指南
            {
                path:'/helpAndSupport/helpAndSupport',
                name:'helpAndSupport',
                component:HelpAndSupport
            },
          //控制台页面
          {
            path:'/console/consolePage',
            name:'ConsolePage',
            component:ConsolePage
          },
          //集群页面
          {
            path:'/console/colonyInfo',
            name:'ColonyInfo',
            component:ColonyInfo
          },
          //业务中心
          {
            path:'/console/businessCenterInfo',
            name:'BusinessCenterInfo',
            component:BusinessCenterInfo
          },
          //应用
          {
            path:'/console/applicationInfo',
            name:'ApplicationInfo',
            component:ApplicationInfo
          },
          //服务
          {
            path:'/console/serviceInfo',
            name:'ServiceInfo',
            component:ServiceInfo
          }
        ]
    },

  ]
})
