// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {

  before: function (browser) {
    console.log('Setting up... browser', typeof browser)
  },

  after: function (browser) {
    console.log('Closing down... browser', typeof browser)
  },

  'CoreUI Vue e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js

    // const devServer = browser.globals.devServerURL
    const devServer = process.env.VUE_DEV_SERVER_URL


    browser.url(devServer).pause(500).expect.element('body').to.be.present

    browser.waitForElementVisible('.a-app', 2000)
      .assert.elementPresent('.a-header')
      .assert.elementPresent('.a-sidebar')
      .assert.elementPresent('.a-footer')
      .assert.elementPresent('.a-sidebar')
      .assert.elementPresent('.a-body')
      
    browser.end()
  }
}
