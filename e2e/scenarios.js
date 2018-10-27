'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

 browser.get('http://localhost:3000/');
 beforeEach(function() {
    
     browser.sleep(5000);
 });

  it('should navigate to admin view', function() {
        element.all(by.repeater('r in vm.navRoutes')).
        get(1).
        $('a').
        click();
        browser.sleep(5000);
        expect(browser.getLocationAbsUrl()).toMatch("/admin");
        expect(browser.getTitle()).toEqual('COMPAS LITE: Admin');
  });

  it('should navigate to configurator view', function() {
        element.all(by.repeater('r in vm.navRoutes')).
        get(2).
        $('a').
        click();
        browser.sleep(5000);
        expect(browser.getLocationAbsUrl()).toMatch("/configurator");
         expect(browser.getTitle()).toEqual('COMPAS LITE: Configurator');
  });

  it('should navigate to siplus view', function() {
        element.all(by.repeater('r in vm.navRoutes')).
        get(3).
        $('a').
        click();
        browser.sleep(5000);
        expect(browser.getLocationAbsUrl()).toMatch("/siplus");
         expect(browser.getTitle()).toEqual('COMPAS LITE: SIplus');
  });

  it('should navigate to catalog view', function() {
        element.all(by.repeater('r in vm.navRoutes')).
        get(4).
        $('a').
        click();
        browser.sleep(5000);
        expect(browser.getLocationAbsUrl()).toMatch("/catalog");
         expect(browser.getTitle()).toEqual('COMPAS LITE: Catalog');
  });

  it('should navigate to dashboard view', function() {
        element.all(by.repeater('r in vm.navRoutes')).
        get(0).
        $('a').
        click();
        browser.sleep(5000);
        expect(browser.getLocationAbsUrl()).toMatch("/");
         expect(browser.getTitle()).toEqual('COMPAS LITE: dashboard');
  });
  
  /*it('should automatically redirect to /home after login in success', function() {
        element(by.model('credentials.username')).sendKeys('atcc01');
        element(by.model('credentials.password')).sendKeys('atcc01');
     
        element(by.css('.ui-btn')).click();
             
        expect(browser.getLocationAbsUrl()).toMatch("/home");
        browser.sleep(3000);
  });*/
    
 /* it('navigate to products, job and home', function() {
        
        
        element(by.css('#menu li:nth-child(2)')).click();
        expect(browser.getLocationAbsUrl()).toMatch("/joblist");
      
        element(by.css('#menu li:nth-child(3)')).click();  
        expect(browser.getLocationAbsUrl()).toMatch("/products");
        
      
        element(by.css('#menu li:nth-child(1)')).click();
        expect(browser.getLocationAbsUrl()).toMatch("/home");
      
        browser.sleep(2000);
  });
    
  it('logout the user', function() {
        
        browser.get('index.html#/products'); 
        browser.sleep(2000);
      
        element(by.css('#user li')).click();
        expect(browser.getLocationAbsUrl()).toMatch("/login");
        browser.sleep(2000);
      
        browser.get('index.html#/products');  
        expect(browser.getLocationAbsUrl()).toMatch("/login");
        browser.sleep(2000);
  });  */

 
  
});
