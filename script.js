const {hash} = window.location;

const msg = atob(hash.replace('#', ''));

if(msg)
{
    document.querySelector('#msg-form').classList.add('hide');
    document.querySelector('#msg-show').classList.remove('hide');
    
    document.querySelector('h4').innerHTML = msg;

}

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();

    document.querySelector('#msg-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');

    const input = document.querySelector('.msg-input');
    const encrypt = btoa(input.value);
    
    const link = document.querySelector('.link-input');
    link.value = `${window.location}#${encrypt}`;
    link.select();
});