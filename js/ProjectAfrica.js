iFrameResize({
    heightCalculationMethod: 'taggedElement'
});


if (window.location.hash === '#clk_intro') {
    document.onreadystatechange = function () {
        if (document.readyState === 'complete') {
            showSection("clk_intro");
        }
    }
}
else if (window.location.hash === '#clk_scope') {
    document.onreadystatechange = function () {
        if (document.readyState === 'complete') {
            showSection("clk_scope");
        }
    }
}
else if (window.location.hash === '#clk_empl') {
    document.onreadystatechange = function () {
        if (document.readyState === 'complete') {
            showSection("clk_empl");
        }
    }
}
else if (window.location.hash === '#clk_infra') {
    document.onreadystatechange = function () {
        if (document.readyState === 'complete') {
            showSection("clk_infra");
        }
    }
}
else if (window.location.hash === '#clk_tele') {
    document.onreadystatechange = function () {
        if (document.readyState === 'complete') {
            showSection("clk_tele");
        }
    }
}
else if (window.location.hash === '#clk_trade') {
    document.onreadystatechange = function () {
        if (document.readyState === 'complete') {
            showSection("clk_trade");
        }
    }
}
else if (window.location.hash === '#clk_birth') {
    document.onreadystatechange = function () {
        if (document.readyState === 'complete') {
            showSection("clk_birth");
        }
    }
}
else if (window.location.hash === '#clk_conc') {
    document.onreadystatechange = function () {
        if (document.readyState === 'complete') {
            showSection("clk_conc");
        }
    }
}



function showSection(id) {
    if (id == "clk_intro") {

        document.getElementById('intro').style.display = 'inline';
        document.getElementById('scope').style.display = 'none';
        document.getElementById('empl').style.display = 'none';
        document.getElementById('infra').style.display = 'none';
        document.getElementById('tele').style.display = 'none';
        document.getElementById('trade').style.display = 'none';
        document.getElementById('birth').style.display = 'none';
        document.getElementById('conc').style.display = 'none';

        document.getElementById('clk_intro').parentNode.classList.add('active');
        document.getElementById('clk_scope').parentNode.classList.remove('active');
        document.getElementById('clk_empl').parentNode.classList.remove('active');
        document.getElementById('clk_infra').parentNode.classList.remove('active');
        document.getElementById('clk_tele').parentNode.classList.remove('active');
        document.getElementById('clk_trade').parentNode.classList.remove('active');
        document.getElementById('clk_birth').parentNode.classList.remove('active');
        document.getElementById('clk_conc').parentNode.classList.remove('active');

    }
    else if (id == "clk_scope") {

        document.getElementById('intro').style.display = 'none';
        document.getElementById('scope').style.display = 'inline';
        document.getElementById('empl').style.display = 'none';
        document.getElementById('infra').style.display = 'none';
        document.getElementById('tele').style.display = 'none';
        document.getElementById('trade').style.display = 'none';
        document.getElementById('birth').style.display = 'none';
        document.getElementById('conc').style.display = 'none';

        document.getElementById('clk_intro').parentNode.classList.remove('active');
        document.getElementById('clk_scope').parentNode.classList.add('active');
        document.getElementById('clk_empl').parentNode.classList.remove('active');
        document.getElementById('clk_infra').parentNode.classList.remove('active');
        document.getElementById('clk_tele').parentNode.classList.remove('active');
        document.getElementById('clk_trade').parentNode.classList.remove('active');
        document.getElementById('clk_birth').parentNode.classList.remove('active');
        document.getElementById('clk_conc').parentNode.classList.remove('active');

    }
    else if (id == "clk_empl") {

        document.getElementById('intro').style.display = 'none';
        document.getElementById('scope').style.display = 'none';
        document.getElementById('empl').style.display = 'inline';
        document.getElementById('infra').style.display = 'none';
        document.getElementById('tele').style.display = 'none';
        document.getElementById('trade').style.display = 'none';
        document.getElementById('birth').style.display = 'none';
        document.getElementById('conc').style.display = 'none';

        document.getElementById('clk_intro').parentNode.classList.remove('active');
        document.getElementById('clk_scope').parentNode.classList.remove('active');
        document.getElementById('clk_empl').parentNode.classList.add('active');
        document.getElementById('clk_infra').parentNode.classList.remove('active');
        document.getElementById('clk_tele').parentNode.classList.remove('active');
        document.getElementById('clk_trade').parentNode.classList.remove('active');
        document.getElementById('clk_birth').parentNode.classList.remove('active');
        document.getElementById('clk_conc').parentNode.classList.remove('active');

    }
    else if (id == "clk_infra") {

        document.getElementById('intro').style.display = 'none';
        document.getElementById('scope').style.display = 'none';
        document.getElementById('empl').style.display = 'none';
        document.getElementById('infra').style.display = 'inline';
        document.getElementById('tele').style.display = 'none';
        document.getElementById('trade').style.display = 'none';
        document.getElementById('birth').style.display = 'none';
        document.getElementById('conc').style.display = 'none';

        document.getElementById('clk_intro').parentNode.classList.remove('active');
        document.getElementById('clk_scope').parentNode.classList.remove('active');
        document.getElementById('clk_empl').parentNode.classList.remove('active');
        document.getElementById('clk_infra').parentNode.classList.add('active');
        document.getElementById('clk_tele').parentNode.classList.remove('active');
        document.getElementById('clk_trade').parentNode.classList.remove('active');
        document.getElementById('clk_birth').parentNode.classList.remove('active');
        document.getElementById('clk_conc').parentNode.classList.remove('active');

    }
    else if (id == "clk_tele") {

        document.getElementById('intro').style.display = 'none';
        document.getElementById('scope').style.display = 'none';
        document.getElementById('empl').style.display = 'none';
        document.getElementById('infra').style.display = 'none';
        document.getElementById('tele').style.display = 'inline';
        document.getElementById('trade').style.display = 'none';
        document.getElementById('birth').style.display = 'none';
        document.getElementById('conc').style.display = 'none';

        document.getElementById('clk_intro').parentNode.classList.remove('active');
        document.getElementById('clk_scope').parentNode.classList.remove('active');
        document.getElementById('clk_empl').parentNode.classList.remove('active');
        document.getElementById('clk_infra').parentNode.classList.remove('active');
        document.getElementById('clk_tele').parentNode.classList.add('active');
        document.getElementById('clk_trade').parentNode.classList.remove('active');
        document.getElementById('clk_birth').parentNode.classList.remove('active');
        document.getElementById('clk_conc').parentNode.classList.remove('active');

    }
    else if (id == "clk_trade") {

        document.getElementById('intro').style.display = 'none';
        document.getElementById('scope').style.display = 'none';
        document.getElementById('empl').style.display = 'none';
        document.getElementById('infra').style.display = 'none';
        document.getElementById('tele').style.display = 'none';
        document.getElementById('trade').style.display = 'inline';
        document.getElementById('birth').style.display = 'none';
        document.getElementById('conc').style.display = 'none';

        document.getElementById('clk_intro').parentNode.classList.remove('active');
        document.getElementById('clk_scope').parentNode.classList.remove('active');
        document.getElementById('clk_empl').parentNode.classList.remove('active');
        document.getElementById('clk_infra').parentNode.classList.remove('active');
        document.getElementById('clk_tele').parentNode.classList.remove('active');
        document.getElementById('clk_trade').parentNode.classList.add('active');
        document.getElementById('clk_birth').parentNode.classList.remove('active');
        document.getElementById('clk_conc').parentNode.classList.remove('active');

    }
    else if (id == "clk_birth") {

        document.getElementById('intro').style.display = 'none';
        document.getElementById('scope').style.display = 'none';
        document.getElementById('empl').style.display = 'none';
        document.getElementById('infra').style.display = 'none';
        document.getElementById('tele').style.display = 'none';
        document.getElementById('trade').style.display = 'none';
        document.getElementById('birth').style.display = 'inline';
        document.getElementById('conc').style.display = 'none';

        document.getElementById('clk_intro').parentNode.classList.remove('active');
        document.getElementById('clk_scope').parentNode.classList.remove('active');
        document.getElementById('clk_empl').parentNode.classList.remove('active');
        document.getElementById('clk_infra').parentNode.classList.remove('active');
        document.getElementById('clk_tele').parentNode.classList.remove('active');
        document.getElementById('clk_trade').parentNode.classList.remove('active');
        document.getElementById('clk_birth').parentNode.classList.add('active');
        document.getElementById('clk_conc').parentNode.classList.remove('active');

    }
    else if (id == "clk_conc") {

        document.getElementById('intro').style.display = 'none';
        document.getElementById('scope').style.display = 'none';
        document.getElementById('empl').style.display = 'none';
        document.getElementById('infra').style.display = 'none';
        document.getElementById('tele').style.display = 'none';
        document.getElementById('trade').style.display = 'none';
        document.getElementById('birth').style.display = 'none';
        document.getElementById('conc').style.display = 'inline';

        document.getElementById('clk_intro').parentNode.classList.remove('active');
        document.getElementById('clk_scope').parentNode.classList.remove('active');
        document.getElementById('clk_empl').parentNode.classList.remove('active');
        document.getElementById('clk_infra').parentNode.classList.remove('active');
        document.getElementById('clk_tele').parentNode.classList.remove('active');
        document.getElementById('clk_trade').parentNode.classList.remove('active');
        document.getElementById('clk_birth').parentNode.classList.remove('active');
        document.getElementById('clk_conc').parentNode.classList.add('active');

    }
}