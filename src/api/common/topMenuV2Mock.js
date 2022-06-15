

export default {
  url: '/function/v2/getFunctionByUserId',
  enableMock: true, // 是否使用本地假数据
  mock: {
    "erroCode":2000,
    "erroMsg":null,
    "result":{ 
      "javascript:void(0)":"2c92848f62ce22440162d3367f830003",
      "/waste-management/#/managePlanFiling":"7887ce4e657843e7a0e35859f8954317",
      "/waste-management/#/transferPlanFiling":"7887ce4e657843e7a0e35859f8954317", 
      "/waste-management/#/managePlanApproval":"7887ce4e657843e7a0e35859f8954317",
      "/waste-management/#/transferPlanApproval":"7887ce4e657843e7a0e35859f8954317",
      "/waste-management/#/standingBook":"7887ce4e657843e7a0e35859f8954317", 
      "/waste-management/#/warehouse":"7887ce4e657843e7a0e35859f8954317", 
      "/waste-management/#/storageWarehouse":"7887ce4e657843e7a0e35859f8954317",  
      "/waste-management/#/transferReceipt":"7887ce4e657843e7a0e35859f8954317", 
      "/waste-management/#/transferAccount": '7887ce4e657843e7a0e35859f8954317',
      "/waste-management/#/disposalAccount": '7887ce4e657843e7a0e35859f8954317',
      "/waste-management/#/outputAccount":"7887ce4e657843e7a0e35859f8954317",  
      "/waste-management/#/materialFlow":"2c92848f62ce22440162d2ee37a90001",  
      "/waste-management/#/dataStatistics": '2c92848f62ce22440162d2ee37a90001',
      "7887ce4e657843e7a0e35859f8954317":[
        {
          "childList": [
            {
              "childList":null,
              "code":"ROLE_FUN_006_02",
              "haveChildren":false,
              "iconUrl":'&#xe639;',
              "id":"2c92848f61543d380161613630ad0002",
              "menuName":"管理计划备案",
              "menuUrl":"/waste-management/#/managePlanFiling",
              "orderNo":1,
              "parentId":"2c92848f640256f50164257f71260000"
            }, {
              "childList":null,
              "code":"ROLE_FUN_006_02",
              "haveChildren":false,
              "iconUrl":'&#xe639;',
              "id":"2c92848f61543d3801xa61613630ad0001",
              "menuName":"转移计划备案",
              "menuUrl":"/waste-management/#/transferPlanFiling",
              "orderNo":1,
              "parentId":"2c92848f640256f50164257f71260000"
            }
          ],
          "code":"ROLE_FUN_006_02_06",
          "haveChildren":true,
          "iconUrl":'&#xe62a;',
          "id":"2c92848f640256f50164257f71260000",
          "menuName":"备案",
          "menuUrl":"/waste-management/#/energyEfficiency",
          "orderNo":0,
          "parentId":"7887ce4e657843e7a0e35859f8954317"
        },
        {
          "childList": [
            {
              "childList":null,
              "code":"ROLE_FUN_006_02",
              "haveChildren":false,
              "iconUrl":'&#xe639;',
              "id":"2c92848f61543d38016161363040002",
              "menuName":"管理计划审批",
              "menuUrl":"/waste-management/#/managePlanApproval",
              "orderNo":1,
              "parentId":"2c92848f640256f50164257f71260000"
            }, {
              "childList":null,
              "code":"ROLE_FUN_006_02",
              "haveChildren":false,
              "iconUrl":'&#xe639;',
              "id":"2c92848f61543d380261613630ad0001",
              "menuName":"转移计划审批",
              "menuUrl":"/waste-management/#/transferPlanApproval",
              "orderNo":1,
              "parentId":"2c92848f640256f50164257f71260000"
            }
          ],
          "code":"ROLE_FUN_006_02",
          "haveChildren":true,
          "iconUrl":'&#xe688;',
          "id":"2c92848f61543d380161613630ad0001",
          "menuName":"审批核准",
          "menuUrl":"/waste-management/#/technology",
          "orderNo":1,
          "parentId":"7887ce4e657843e7a0e35859f8954317"
        },
        {
          "childList": [
            {
              "childList":null,
              "code":"ROLE_FUN_006_02",
              "haveChildren":false,
              "iconUrl":'&#xe639;',
              "id":"2c92848f61561613630ad0002",
              "menuName":"产废台账",
              "menuUrl":"/waste-management/#/standingBook",
              "orderNo":1,
              "parentId":"2c92848f640256f50164257f71260000"
            }
          ],
          "code":"ROLE_FUN_04_05",
          "haveChildren":true,
          "iconUrl":'&#xe6d2;',
          "id":"2c92848f62ce22440162d32a256a00s2",
          "menuName":"产废管理",
          "menuUrl":"/waste-management/#/costAnalysis",
          "orderNo":4,
          "parentId":"7887ce4e657843e7a0e35859f8954317"
        },
        {
          "childList": [
            {
              "childList":null,
              "code":"ROLE_FUN_006_02",
              "haveChildren":false,
              "iconUrl":'&#xe639;',
              "id":"2c92848f615616a2630ad0002",
              "menuName":"入库/出库台账",
              "menuUrl":"/waste-management/#/storageWarehouse",
              "orderNo":1,
              "parentId":"2c92848f640256f50164257f71260000"
            }
          ],
          "code":"ROLE_FUN_005_03",
          "haveChildren":true,
          "iconUrl":'&#xe66f;',
          "id":"402881255ce7a21b015ce82730ce0003",
          "menuName":"贮存管理",
          "menuUrl":"/waste-management/#/hybridReport",
          "orderNo":4,
          "parentId":"7887ce4e657843e7a0e35859f8954317"
        },
        {
          "childList": [
            {
              "childList":null,
              "code":"ROLE_FUN_006_02",
              "haveChildren":false,
              "iconUrl":'&#xe639;',
              "id":"2c92848f615616a2630adax0002",
              "menuName":"转移联单",
              "menuUrl":"/waste-management/#/transferReceipt",
              "orderNo":1,
              "parentId":"2c92848f640256f50164257f71260000"
            },{
              "childList":null,
              "code":"ROLE_FUN_006_02",
              "haveChildren":false,
              "iconUrl":'&#xe639;',
              "id":"2c92848f615616a2630adax0012202",
              "menuName":"转移台账",
              "menuUrl":"/waste-management/#/transferAccount",
              "orderNo":1,
              "parentId":"2c92848f640256f50164257f71260000" 
            }
          ],
          "code":"ROLE_FUN_002_01",
          "haveChildren":true,
          "iconUrl":'&#xe86f;',
          "id":"2c9280dc5ad2347e015ad4fd83c60006",
          "menuName":"转移管理",
          "menuUrl":"/waste-management/#/stationPollutionAnalysis",
          "orderNo":5,
          "parentId":"7887ce4e657843e7a0e35859f8954317"
        },
        {
          "childList": [
            {
              "childList":null,
              "code":"ROLE_FUN_006_02",
              "haveChildren":false,
              "iconUrl":'&#xe639;',
              "id":"2c92848f615616a2630adax012002",
              "menuName":"入库/出库台账",
              "menuUrl":"/waste-management/#/warehouse",
              "orderNo":1,
              "parentId":"2c92848f640256f50164257f71260000"
            },{
              "childList":null,
              "code":"ROLE_FUN_006_02",
              "haveChildren":false,
              "iconUrl":'&#xe639;',
              "id":"2c92848f615616a2630adax012ae0aaa02",
              "menuName":"处置台账",
              "menuUrl":"/waste-management/#/disposalAccount",
              "orderNo":1,
              "parentId":"2c92848f640256f50164257f71260000"
            },{
              "childList":null,
              "code":"ROLE_FUN_006_02",
              "haveChildren":false,
              "iconUrl":'&#xe639;',
              "id":"2c92848f615616a2630adax012ae002",
              "menuName":"产出台账",
              "menuUrl":"/waste-management/#/outputAccount",
              "orderNo":1,
              "parentId":"2c92848f640256f50164257f71260000"
            }
          ],
          "code":"ROLE_FUN_04_10",
          "haveChildren":false,
          "iconUrl":'&#xe661;',
          "id":"49a1f68705d111ea92bc6664cb193084",
          "menuName":"处置管理",
          "menuUrl":"/waste-management/#/taskManage",
          "orderNo":6,
          "parentId":"7887ce4e657843e7a0e35859f8954317"
        }, 
      ], 
      "2c92848f62ce22440162d2ee37a90001": [
        {
          "code":"ROLE_FUN_04_10",
          "haveChildren":false,
          "iconUrl":'&#xe66c;',
          "id":"49a1f68705d111ea92bc6664cb193566084",
          "menuName":"数据分析",
          "menuUrl":"/waste-management/#/dataStatistics",
          "orderNo":6,
          "parentId":"2c92848f62ce22440162d2ee37a90001"
        },
        {
          "childList":null,
          "code":"ROLE_FUN_006_02",
          "haveChildren":false,
          "iconUrl":'&#xe709;',
          "id":"2c92848f61543d380161613630ad0001z",
          "menuName":"废物流向分析",
          "menuUrl":"/waste-management/#/materialFlow",
          "orderNo":1,
          "parentId":"2c92848f62ce22440162d2ee37a90001"
        },
        // {
        //   "childList":null,
        //   "code":"ROLE_FUN_04_05",
        //   "haveChildren":false,
        //   "iconUrl":'&#xe69a;',
        //   "id":"2c92848f62ce22440162d32a256a00s2a",
        //   "menuName":"碳减排分析",
        //   "menuUrl":"/waste-management/#/costAnalysis",
        //   "orderNo":4,
        //   "parentId":"2c92848f62ce22440162d2ee37a90001"
        // },
      ],
      "0234bdead4214199b41d73ee9831b269": [],
      "first":[
        {
          "childList":null,
          "code":"ROLE_FUN_01",
          "haveChildren":false,
          "iconUrl":"&#xeab4;",
          "id":"2c92848f62ce22440162d2ecf46a0000",
          "menuName":"首页",
          "menuUrl":"/waste-management/#/index",
          "orderNo":1,
          "parentId":null
        },
        {
          "childList":null,
          "code":"ROLE_FUN_12",
          "haveChildren":true,
          "iconUrl":"&#xe699;",
          "id":"7887ce4e657843e7a0e35859f8954317",
          "menuName":"业务过程管理",
          "menuUrl":"javascript:void(0)",
          "orderNo":2,
          "parentId":null
        },
        {
          "childList":null,
          "code":"ROLE_FUN_02",
          "haveChildren":true,
          "iconUrl":"&#xe65b;",
          "id":"2c92848f62ce22440162d2ee37a90001",
          "menuName":"数据分析",
          "menuUrl":"javascript:void(0)",
          "orderNo":3,
          "parentId":null
        },
        {
          "childList":null,
          "code":"ROLE_FUN_001",
          "haveChildren":true,
          "iconUrl":"&#xe72d;",
          "id":"7887ce4e657843e7a0e35859f89543x17",
          "menuName":"信息管理",
          "menuUrl":"javascript:void(0)",
          "orderNo":4,
          "parentId":null
        }, 
      ]
    }
  }
}
