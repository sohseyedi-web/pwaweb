console.log('استقلال سرور پرسپولیسه')
const pwaBtn = document.querySelector('.btn-box #pwabtn');
let promptBox;

pwaBtn.addEventListener('click', () => {
    if (promptBox) {
        promptBox.prompt();
        promptBox.userChoice.then((choice) => {
            console.log(choice);
            if (choice.outcome === 'dismissed') {
                console.log('installation was cancelled');
            } else {
                console.log('installation was okay');
            }
        });

        promptBox = null
    }
})

window.addEventListener('beforeinstallprompt', (e) => {
    console.log('before install prompt');
    e.preventDefault();
    promptBox = e;
    return false;
})

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js', { scope: "/" }).then(() => {
        console.log('[SW] is register');
    }).catch((err) => {
        console.log('[SW] is Error', err);
    })
}
if ('serviceWorker' in navigator && 'SyncManager' in window) {
    navigator.serviceWorker.ready.then((sw) => {
        return sw.sync.register('syncmanger')
    }).then(() => {
        console.log('sync manager is register');
    }).catch((err) => {
        console.log('sync manager is error ', err);
    })
}
const bellNotification = document.getElementById('btn-fixed');
const bellModifireBtn = () => {
    bellNotification.style.visibility = 'hidden';
    // bellNotification.style.display = 'none'
}
if ('Notification' in window && 'serviceWorker' in navigator) {
    if (Notification.permission === 'granted') {
        bellModifireBtn();
    } else {
        bellNotification.addEventListener('click', (e) => {
            e.preventDefault();
            Notification.requestPermission((userChoice) => {
                if (userChoice === 'denied') {
                    console.log('اطلاع رسانی ثبت نشد');
                } else {
                    alert('حله از این به بعد صدات میزنم')
                }
            })
        })
    }
}


