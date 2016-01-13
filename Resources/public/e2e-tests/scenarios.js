'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('frontendApp', function() {


  it('should automatically redirect to / when location hash/fragment is empty', function() {
    browser.get('app_dev.php');
    expect(browser.getLocationAbsUrl()).toMatch("/");
  });


  describe('view1', function() {

    beforeEach(function() {
      browser.get('app_dev.php/#/');
    });


    it('should render home when user navigates to /', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


});
