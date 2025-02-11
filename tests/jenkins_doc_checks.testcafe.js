import { Selector } from 'testcafe';

fixture `Jenkins_doc_check`
    .page `https://www.jenkins.io/`;

test('Check_Jenkins_Flow', async t => {
    await t
        .click(Selector('a').withText('Documentation'))
        .click('#what-is-jenkins')
        .expect(Selector('#what-is-jenkins').exists).eql('What is Jenkins?', 'Text is not expected', {
            timeout: 3000
        })
        .click(Selector('#sidebar-content a').withText('Glossary'));
});