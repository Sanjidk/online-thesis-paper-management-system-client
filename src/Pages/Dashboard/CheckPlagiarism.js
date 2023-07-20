import React from 'react';

const CheckPlagiarism = () => {
    return (
        <div className='flex flex-col items-center'>
            <h1 className='text-3xl text-green-950 font-bold mb-2'>PLAGIARISM CHECKER</h1>

            <div class="card w-96 bg-black mt-2 p-2">

                <h4 className='font-bold text-center text-red-400 text-lg p-2'>... READ & FOLLOW ...</h4>
                <h4 className='font-bold text-white p-2'>1. Before Upload Your Report, you MUST check Plagiarism.</h4>
                <h4 className='font-bold text-white p-2'>2. You must give percent(%) of plagiarism before Upload REPORT.</h4>
                <h4 className='font-bold text-white p-2'>3. If Plagiarism is more than 15%, the report will not be accepted.</h4>
                <h4 className='font-bold text-white p-2'>4. If Plagiarism is less than 15%, the report will be accepted.</h4>
                <h4 className='font-bold text-white p-2'>5. It is a manual system but in future, it will be functional in this website.</h4>
                



                <a className='text-center' target='blank' href="https://www.grammarly.com/plagiarism-checker?utm_source=google&utm_medium=cpc&utm_campaign=19841729275&utm_content=652327824443&utm_term=plagiarism%20checker&target=&targetid=aud-332195722204:kwd-11839001&adgroup=146708454909&device=c&matchtype=b&placement=&network=g&extension=&clickid=Cj0KCQjw8NilBhDOARIsAHzpbLABL1DOO8rEZU8VfuddtXIkrl5wTTG4ZxTcx014YtBhWWhDuDokcT8aAp_3EALw_wcB&gad=1&gclid=Cj0KCQjw8NilBhDOARIsAHzpbLABL1DOO8rEZU8VfuddtXIkrl5wTTG4ZxTcx014YtBhWWhDuDokcT8aAp_3EALw_wcB&gclsrc=aw.ds">
                    <button class="btn btn-secondary m-4">Plagiarism Check Button</button>
                </a>

            </div>
        </div>
    );
};

export default CheckPlagiarism;