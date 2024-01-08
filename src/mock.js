var MockAdapter = require('axios-mock-adapter')
const code = '00002'
const secondParent = '00001'
const code3 = '00003'
const code4 = '00004'
const code5 = '00005'
const code6 = '00006'
const code7 = '00007'
const code8 = '00008'
const code9 = '00009'
const code10 = '00010'
const code11 = '00011'
const code12 = '00012'
const code13 = '00013'
module.exports = function (axios) {
  var mock = new MockAdapter(axios)
  mock.onGet(`/api/policyholders/${code13}/top`).reply(200, {
    code: '000013',
    name: 'test13',
    registration_date: new Date(),
    introducer_code: '000010',
    l: [],
    r: []
  })
  mock.onGet(`/api/policyholders/${code12}/top`).reply(200, {
    code: '000012',
    name: 'test12',
    registration_date: new Date(),
    introducer_code: '000010',
    l: [{
      code: '000013',
      name: 'test13',
      registration_date: new Date(),
      introducer_code: '000010'
    }],
    r: []
  })
  mock.onGet(`/api/policyholders/${code11}/top`).reply(200, {
    code: '000011',
    name: 'test11',
    registration_date: new Date(),
    introducer_code: '00007',
    l: [{
      code: '000012',
      name: 'test12',
      registration_date: new Date(),
      introducer_code: '000010'
    }],
    r: [{
      code: '000013',
      name: 'test13',
      registration_date: new Date(),
      introducer_code: '000010'
    }]
  })
  mock.onGet(`/api/policyholders/${code10}/top`).reply(200, {
    code: '000010',
    name: 'test10',
    registration_date: new Date(),
    introducer_code: '00005',
    l: [{
      code: '000011',
      name: 'test11',
      registration_date: new Date(),
      introducer_code: '00005'
    }, {
      code: '000013',
      name: 'test13',
      registration_date: new Date(),
      introducer_code: '000010'
    }],
    r: [{
      code: '000012',
      name: 'test12',
      registration_date: new Date(),
      introducer_code: '000010'
    }]
  })
  mock.onGet(`/api/policyholders/${code9}/top`).reply(200, {
    code: '00009',
    name: 'test9',
    registration_date: new Date(),
    introducer_code: '00007',
    l: [{
      code: '000010',
      name: 'test10',
      registration_date: new Date(),
      introducer_code: '00005'
    }, {
      code: '000012',
      name: 'test12',
      registration_date: new Date(),
      introducer_code: '000010'
    }, {
      code: '000013',
      name: 'test13',
      registration_date: new Date(),
      introducer_code: '000010'
    }],
    r: [{
      code: '000011',
      name: 'test11',
      registration_date: new Date(),
      introducer_code: '00007'
    }]
  })
  mock.onGet(`/api/policyholders/${code8}/top`).reply(200, {
    code: '00008',
    name: 'test8',
    registration_date: new Date(),
    introducer_code: '00005',
    l: [{
      code: '00009',
      name: 'test9',
      registration_date: new Date(),
      introducer_code: '00007'
    }, {
      code: '000011',
      name: 'test11',
      registration_date: new Date(),
      introducer_code: '00007'
    }, {
      code: '000012',
      name: 'test12',
      registration_date: new Date(),
      introducer_code: '000010'
    }],
    r: [{
      code: '000010',
      name: 'test10',
      registration_date: new Date(),
      introducer_code: '00005'
    }, {
      code: '000013',
      name: 'test13',
      registration_date: new Date(),
      introducer_code: '000010'
    }]
  })
  mock.onGet(`/api/policyholders/${code7}/top`).reply(200, {
    code: '00007',
    name: 'test7',
    registration_date: new Date(),
    introducer_code: '00001',
    l: [{
      code: '00008',
      name: 'test8',
      registration_date: new Date(),
      introducer_code: '00005'
    }, {
      code: '000010',
      name: 'test10',
      registration_date: new Date(),
      introducer_code: '00005'
    }, {
      code: '000011',
      name: 'test11',
      registration_date: new Date(),
      introducer_code: '00007'
    }],
    r: [{
      code: '00009',
      name: 'test9',
      registration_date: new Date(),
      introducer_code: '00007'
    }, {
      code: '000012',
      name: 'test12',
      registration_date: new Date(),
      introducer_code: '000010'
    }, {
      code: '000013',
      name: 'test13',
      registration_date: new Date(),
      introducer_code: '000010'
    }]
  })
  mock.onGet(`/api/policyholders/${code6}/top`).reply(200, {
    code: '00006',
    name: 'test6',
    registration_date: new Date(),
    introducer_code: '00002',
    l: [{
      code: '00007',
      name: 'test7',
      registration_date: new Date(),
      introducer_code: '00001'
    }, {
      code: '00009',
      name: 'test9',
      registration_date: new Date(),
      introducer_code: '00007'
    }, {
      code: '000010',
      name: 'test10',
      registration_date: new Date(),
      introducer_code: '00005'
    }, {
      code: '000013',
      name: 'test13',
      registration_date: new Date(),
      introducer_code: '000010'
    }],
    r: [{
      code: '00008',
      name: 'test8',
      registration_date: new Date(),
      introducer_code: '00005'
    }, {
      code: '000011',
      name: 'test11',
      registration_date: new Date(),
      introducer_code: '00007'
    }, {
      code: '000012',
      name: 'test12',
      registration_date: new Date(),
      introducer_code: '000010'
    }]
  })
  mock.onGet(`/api/policyholders/${code5}/top`).reply(200, {
    code: '00005',
    name: 'test5',
    registration_date: new Date(),
    introducer_code: '00001',
    l: [{
      code: '00006',
      name: 'test6',
      registration_date: new Date(),
      introducer_code: '00002'
    }, {
      code: '00008',
      name: 'test8',
      registration_date: new Date(),
      introducer_code: '00005'
    }, {
      code: '00009',
      name: 'test9',
      registration_date: new Date(),
      introducer_code: '00007'
    }, {
      code: '000012',
      name: 'test12',
      registration_date: new Date(),
      introducer_code: '000010'
    }, {
      code: '000013',
      name: 'test13',
      registration_date: new Date(),
      introducer_code: '000010'
    }],
    r: [{
      code: '00007',
      name: 'test7',
      registration_date: new Date(),
      introducer_code: '00001'
    }, {
      code: '000010',
      name: 'test10',
      registration_date: new Date(),
      introducer_code: '00005'
    }, {
      code: '000011',
      name: 'test11',
      registration_date: new Date(),
      introducer_code: '00007'
    }]
  })
  mock.onGet(`/api/policyholders/${code4}/top`).reply(200, {
    code: '00004',
    name: 'test4',
    registration_date: new Date(),
    introducer_code: '00003',
    l: [{
      code: '00005',
      name: 'test5',
      registration_date: new Date(),
      introducer_code: '00001'
    }, {
      code: '00007',
      name: 'test7',
      registration_date: new Date(),
      introducer_code: '00001'
    }, {
      code: '00008',
      name: 'test8',
      registration_date: new Date(),
      introducer_code: '00005'
    }, {
      code: '000011',
      name: 'test11',
      registration_date: new Date(),
      introducer_code: '00001'
    }, {
      code: '000012',
      name: 'test12',
      registration_date: new Date(),
      introducer_code: '000010'
    }, {
      code: '000013',
      name: 'test13',
      registration_date: new Date(),
      introducer_code: '000010'
    }],
    r: [{
      code: '00006',
      name: 'test6',
      registration_date: new Date(),
      introducer_code: '00002'
    }, {
      code: '00009',
      name: 'test9',
      registration_date: new Date(),
      introducer_code: '00007'
    }, {
      code: '000010',
      name: 'test10',
      registration_date: new Date(),
      introducer_code: '00005'
    }]
  })
  mock.onGet(`/api/policyholders/${code3}/top`).reply(200, {
    code: '00003',
    name: 'test3',
    registration_date: new Date(),
    introducer_code: '00002',
    l: [{
      code: '00004',
      name: 'test4',
      registration_date: new Date(),
      introducer_code: '00003'
    }, {
      code: '00006',
      name: 'test6',
      registration_date: new Date(),
      introducer_code: '00002'
    }, {
      code: '00007',
      name: 'test7',
      registration_date: new Date(),
      introducer_code: '00001'
    }, {
      code: '00010',
      name: 'test10',
      registration_date: new Date(),
      introducer_code: '00005'
    }, {
      code: '00011',
      name: 'test11',
      registration_date: new Date(),
      introducer_code: '00007'
    }, {
      code: '00012',
      name: 'test12',
      registration_date: new Date(),
      introducer_code: '000010'
    }, {
      code: '00013',
      name: 'test13',
      registration_date: new Date(),
      introducer_code: '00001'
    }],
    r: [{
      code: '00005',
      name: 'test5',
      registration_date: new Date(),
      introducer_code: '000010'
    }, {
      code: '00008',
      name: 'test8',
      registration_date: new Date(),
      introducer_code: '00005'
    }, {
      code: '00009',
      name: 'test9',
      registration_date: new Date(),
      introducer_code: '00007'
    }, {
      code: '00011',
      name: 'test11',
      registration_date: new Date(),
      introducer_code: '00007'
    }]
  })
  mock.onGet(`/api/policyholders/${code}/top`).reply(200, {
    code: '00002',
    name: 'test2',
    registration_date: new Date(),
    introducer_code: '00001',
    l: [{
      code: '00003',
      name: 'test3',
      registration_date: new Date(),
      introducer_code: '00001'
    }, {
      code: '00005',
      name: 'test5',
      registration_date: new Date(),
      introducer_code: '00002'
    }, {
      code: '00006',
      name: 'test6',
      registration_date: new Date(),
      introducer_code: '00004'
    }, {
      code: '00009',
      name: 'test9',
      registration_date: new Date(),
      introducer_code: '00001'
    }, {
      code: '00010',
      name: 'test10',
      registration_date: new Date(),
      introducer_code: '00001'
    }, {
      code: '000011',
      name: 'test11',
      registration_date: new Date(),
      introducer_code: '00001'
    }, {
      code: '00012',
      name: 'test12',
      registration_date: new Date(),
      introducer_code: '00001'
    }],
    r: [{
      code: '00004',
      name: 'test4',
      registration_date: new Date(),
      introducer_code: '00003'
    }, {
      code: '00007',
      name: 'test7',
      registration_date: new Date(),
      introducer_code: '00004'
    }, {
      code: '00008',
      name: 'test8',
      registration_date: new Date(),
      introducer_code: '00002'
    }, {
      code: '00013',
      name: 'test13',
      registration_date: new Date(),
      introducer_code: '00010'
    }]
  })
  mock.onGet(`/api/policyholders/${secondParent}/top`).reply(200, {
    code: '00001',
    name: 'test1',
    registration_date: new Date(),
    introducer_code: '-1',
    l: [{
      code: '00002',
      name: 'test2',
      registration_date: new Date(),
      introducer_code: '00001'
    }, {
      code: '00004',
      name: 'test3',
      registration_date: new Date(),
      introducer_code: '00001'
    }, {
      code: '00005',
      name: 'test5',
      registration_date: new Date(),
      introducer_code: '00002'
    }, {
      code: '00008',
      name: 'test8',
      registration_date: new Date(),
      introducer_code: '00004'
    }, {
      code: '00009',
      name: 'test9',
      registration_date: new Date(),
      introducer_code: '00001'
    }, {
      code: '00010',
      name: 'test10',
      registration_date: new Date(),
      introducer_code: '00001'
    }],
    r: [{
      code: '00003',
      name: 'test3',
      registration_date: new Date(),
      introducer_code: '00003'
    }, {
      code: '00006',
      name: 'test6',
      registration_date: new Date(),
      introducer_code: '00004'
    }, {
      code: '00007',
      name: 'test7',
      registration_date: new Date(),
      introducer_code: '00002'
    }, {
      code: '00011',
      name: 'test11',
      registration_date: new Date(),
      introducer_code: '00004'
    }, {
      code: '00012',
      name: 'test12',
      registration_date: new Date(),
      introducer_code: '00001'
    }, {
      code: '00013',
      name: 'test13',
      registration_date: new Date(),
      introducer_code: '00001'
    }]
  })
  mock.onGet('/api/policyholders').reply(200, {
    code: '00001',
    name: 'test1',
    registration_date: new Date(),
    introducer_code: '-1',
    l: [{
      code: '00002',
      name: 'test2',
      registration_date: new Date(),
      introducer_code: '00001'
    }, {
      code: '00004',
      name: 'test4',
      registration_date: new Date(),
      introducer_code: '00003'
    }, {
      code: '00005',
      name: 'test5',
      registration_date: new Date(),
      introducer_code: '00001'
    }, {
      code: '00008',
      name: 'test8',
      registration_date: new Date(),
      introducer_code: '00005'
    }, {
      code: '00009',
      name: 'test9',
      registration_date: new Date(),
      introducer_code: '00007'
    }, {
      code: '00010',
      name: 'test10',
      registration_date: new Date(),
      introducer_code: '00005'
    }],
    r: [{
      code: '00003',
      name: 'test3',
      registration_date: new Date(),
      introducer_code: '00002'
    }, {
      code: '00006',
      name: 'test6',
      registration_date: new Date(),
      introducer_code: '00002'
    }, {
      code: '00007',
      name: 'test7',
      registration_date: new Date(),
      introducer_code: '00001'
    }, {
      code: '00011',
      name: 'test11',
      registration_date: new Date(),
      introducer_code: '00004'
    }, {
      code: '00012',
      name: 'test12',
      registration_date: new Date(),
      introducer_code: '000010'
    }, {
      code: '00013',
      name: 'test13',
      registration_date: new Date(),
      introducer_code: '000010'
    }]
  })
}
