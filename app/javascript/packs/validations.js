import moment from 'moment';

export const validations = {
  checkMinLength: (text, minLength) => (
    text.length >= minLength ? '' : `length should be at least ${minLength} characters`
  ),

  timeShouldBeInTheFuture: t => (
    moment(t).isValid() && moment(t).isAfter() ? '' : 'cannot be in the past'
  )
}
