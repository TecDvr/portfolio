function menuClick() {
    $('.menu').on('click', function(event) {
        $('nav').html(`
        <img class="menu" src="https://lh3.googleusercontent.com/fQ7285Qi0WfApU435ojom5nLvGhoAOHGEj1wLhohrGf_l3nFiEHBqyW8xOtsqBBmyghSODEFLYEpfIBU13o99BKtfszwKR3LelofVOKer6jvDFdFEULeQW_lmHDviaZZvJlITNm_myhS0yc--9xJ_sKDTipc1V4MqfrhSoTp3OKagiSc946nPcTOXu0ioII3SeUpiHEYtIsoNQEinToiNJdlWsmoM3nz3_zaXG5jhe2etrldcl4rMvovNN66oxmtJ3nnpkg3uo1KqNyR9mEqSEVbAb91UeyZ7j_Iqo0yZtGrc3cMJ1aDHHV_npOCO1iR4FPHgeeI0un_kF8b7HyTHkkMW1MOvAbwvQvkf_XtuPBaooz2Z2n3hWqWsE04YUaVNELCZ793CI1BAS47WBe98zMveK3hV6a-ftXx_0KTx07OTfdnKDCJg2QH2TY8EjZxu5w1y6hsX8vGK_MyWU75AC7lg9LkmYWeNpRLOkSMdClYYllTlrnpnAcCsGNDDBnKuqPBF-J-JBYgqWv2FtEizV0JX7SG4z5Dy_RPKnDpzWXHg0dAmn27Voh6mGdfOR3Y_DkxGFEZuQQJzvpEPYrNFsy0aLdqe8Ser5uBkEwsmnNp8cE9tbCVSX2_zjCc4JHScYMo0G3Xi7IvNgnDHLHcdm3mrEXsfhQ=s101-no" alt="menu">    
        <div class="menuDrop">
                <p>HOME</p>
                <p>PROJECTS</p>
                <p>ABOUT ME</p>
                <p>GET IN TOUCH</p>
            </div>
        `).hide().fadeIn(500);
        
    });
};

function menuReturn() {
    $('nav').on('click', '.menu', function(event) {
        $('nav').html(`<nav>
        <img class="menu" src="https://lh3.googleusercontent.com/C3lQTS7eC2akYPbM4PaOiE24SMAKCa1mVtyF_vp66sEAV8sI-8zKdHwp3rJhY7A47w67ykRUo2706mCYhWjRPdoor-X8SqxwfNu-vwUr8sNMWw6EuVGep_S4zg29wZCxEUCFZyheStUG4AZETgOvCEo889B5UwtKULZMG3O_NupjeeJ5gqxsR6oEnenRnHlaCZKhZrSUln8DKc5ZszofaiilQ5SHPxyj7NZ5mUp8IkfYnwT-w9HBmV-LR_72CT_3_20ZEtJaahcg1uGy8G4KF2Wn4GfM1xnxKUmp19MAPkQivaUzcB-23N0aK3pUUEGB85kidmpY8425rFOE_YmgANjw-KL9ycDYqsTUJwXx0lpbcIMPyDrQaCnxm56PaqtQc-VzKe8lyPw_TIFAhhSiNcoqLqAxwSss28jp9KzuLo86dlexOOlON5YJcGZsLwWT0p4ByYCwZPzMzfsu8qnS5vQ_te0KESzOh2-pHAfFHKKCP03Fphj_CtXPiIwSJgmhBCNCk2UThosQWgk1fdjuKI5Q6dZEkLtt_QD52MP6OcyJTo70NgSBvGLo9toOvetZ6SMTJy-BiZV8-V37o51Mwg5xnFkVuquVe1ODwBVIy8VN3_2sn7k5ZOjCfMnecL5RdvnuyrDcg5Hb3r3qCyxIRkc8rp5VkT4=s101-no" alt="menu">
    </nav>
<div class="tagBox">
    <h2>01</h2>
    <p class="introTag">Zachary Gwirtz<br>Web Development<br>Inspired by the PNW</p>
</div>`).hide().fadeIn(500);
    });

}; 

function runPortfolio() {
    menuClick();
    menuReturn();
}

$(runPortfolio);