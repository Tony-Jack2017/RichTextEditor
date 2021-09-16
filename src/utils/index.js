
/**
 * debounce
 * This method is for debounce function
 * @param {number} time // execute period
 * @param {function} function // execute fundtion
 */
const debounce = (time, functionn) => {

}

/**
 * throttle
 * This method is for throttle function
 * @param {number} time // execute period
 * @param {function} execute // execute fundtion
 */
const throttle = (time, execute) => {

  let last_previous_time = Date.now()

  return function() {
    let now_time = Date.now()
    let context = this
    let args = arguments
    if(now_time - last_previous_time > time) {
      execute.apply(context, args)
      last_previous_time = now_time
    }
  }
}

export { debounce, throttle }