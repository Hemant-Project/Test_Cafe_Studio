import { Selector } from 'testcafe';

fixture `New Fixture`
    .page `https://www.jenkins.io/`;
    
test(`Test RTI Form`, async t => {
    await t
        .click(Selector('#sponsorsblock div ul li').nth(4).find('a svg'))    
        .click(Selector('footer a').withText('GitHub CLI'))
        .click(Selector('main h2').withText('Goodbye, context switching. Hello, terminal.'))
    });