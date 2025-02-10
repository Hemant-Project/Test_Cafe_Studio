import { Selector } from 'testcafe';

fixture `New Fixture`
    .page `https://docs.devexpress.com/TestCafeStudio`;
    
test(`New Test`, async t => {
    await t
        .click(Selector('span').withText('Basic Guides'))    
        .click(Selector('span').withText('View Reports'))
        .click(Selector('.project-toc__expander').nth(5))
        .click(Selector('span').withText('Migrate From TestCafe v2015.1'))
        .drag(Selector('.project-toc__expander').nth(3), 0, 0, {
            offsetX: 9,
            offsetY: 8
        })
        .click(Selector('span').withText('Integrate Tests with CI Systems'))
        .click('#onetrust-close-btn-container [class^="onetrust-close-btn-handler banner-close-button ot-"]')
        .click(Selector('main a').withText('GitHub Actions'))
        .drag(Selector('main p').withText('This job contains a matrix strategy that duplicate'), 73, -2, {
            offsetX: 67,
            offsetY: 12
        })

    await t
        .click(Selector('main p').withText('This job contains a matrix strategy that duplicate'))
        .click(Selector('main p').withText('This job contains a matrix strategy that duplicate'))

    await t
        .click(Selector('main p').withText('This job contains a matrix strategy that duplicate'))
        .click(Selector('#__next button').withText('I understand'))
});