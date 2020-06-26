var waitingQueue = [], runningQueue = [], activeSnackbar;

function showSnackbar(snackbar) {
    waitingQueue.pushToWaitingQueue(snackbar);
}

$(function () {
    $('[data-toggle="snackbar"]').on('click', function () {
        let snackbar = $(this).data('target');
        showSnackbar($(snackbar));
    });

    Object.defineProperty(waitingQueue, "pushToWaitingQueue", {
        value: function () {
            if (runningQueue.length) {
                waitingQueue.push(arguments[0]);
            } else {
                runningQueue.pushToRunningQueue(arguments[0]);
            }
        }
    });

    Object.defineProperty(runningQueue, "pushToRunningQueue", {
        value: function () {
            activeSnackbar = arguments[0];
            activeSnackbar.addClass('show');
            runningQueue.push(activeSnackbar);

            setTimeout(function () {
                activeSnackbar.removeClass('show');
                runningQueue.removeFromRunningQueue(activeSnackbar);
            }, 3000);
        }
    });

    Object.defineProperty(runningQueue, "removeFromRunningQueue", {
        value: function () {
            if (waitingQueue.length) {
                setTimeout(function () {
                    runningQueue.shift()
                    runningQueue.pushToRunningQueue(waitingQueue.shift());
                }, 200);
            } else {
                runningQueue.shift()
            }
        }
    });
});
