import { Selector } from 'testcafe';

fixture `TestCafe core docs`
    .page `https://docs.devexpress.com/TestCafeStudio`;
    
test(`New Test`, async t => {
    await t
        .click(Selector('span').withText('Basic Guides'))    
        .click(Selector('span').withText('View Reports'))
       
    await t
        .click(Selector('span').withText('Video Tutorials'))
        .click(Selector('span').withText('Installation'))
        .click(Selector('main a').withText('Download a 30-Day Free Trial'))
        .click(Selector('#LightBox h1').withText('TestCafé Studio'))
        .click(Selector('#LightBox div').withText('TestCafé Studio').nth(2))

    await t
        .click(Selector('#LightBox h1').withText('TestCafé Studio'))
        .click(Selector('#LightBox h1').withText('TestCafé Studio'))
        .click(Selector('main h2').withText('Lightweight, Fast and Reliable Test Automation'))
});