class Utils {
  task(task) {
    return `./gulp/tasks/${task}.task`;
  }
}

exports.module = Utils;
