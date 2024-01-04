var MockAdapter = require('axios-mock-adapter')
const code = '00002'
module.exports = function (axios) {
  var mock = new MockAdapter(axios)
  mock.onGet(`/api/policyholders/${code}/top`).reply(200, {
    code: '00002',
    name: 'test2',
    registration_date: new Date(),
    introducer_code: '00001',
    l: [{
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
}
