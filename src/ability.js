import { AbilityBuilder } from 'casl'

/**
 * Defines how to detect object's type: https://stalniy.github.io/casl/abilities/2017/07/20/define-abilities.html
 */
function subjectName(item) {
  if (!item || typeof item === 'string') {
    return item
  }

  return item.__type
}

export default AbilityBuilder.define({ Graduate }, can => {
  can(['read', 'update'], 'Graduate')
  can(['update', 'delete', 'read', 'create'], 'TDA', { assignee: 'me' })
})

// export default AbilityBuilder.define({ employer }, can => {
//     can(['read', 'update'], 'Graduate')
//     can(['read'], 'Employer', { assignee: 'me' })
//     can(['update', 'delete'], 'TDA', { assignee: 'me' })
//   })

// export default AbilityBuilder.define({ subjectName }, can => {
//     can(['read', 'update'], 'Graduate')
//     can(['read'], 'Employer', { assignee: 'me' })
//     can(['update', 'delete'], 'TDA', { assignee: 'me' })
//   })