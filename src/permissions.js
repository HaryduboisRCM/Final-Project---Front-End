import { actions, roles } from "./constants.js";

const mappings = new Map();

// mappings.set(actions.MODIFY_FILE, [roles.GRADUATE, roles.TDA]);
mappings.set(actions.VIEW_FILE,   [roles.GRADUATE, roles.EMPLOYER]);
mappings.set(actions.VIEW_FILE,   [roles.EMPLOYER]);
// mappings.set(actions.DELETE_FILE, [roles.TDA]);
// mappings.set(actions.CREATE_FILE, [roles.TDA]);



function hasPermission(roles, action) {
//   if (!file?.roles) {
//     return false;
//   }

  if (mappings.has(action)) {
    return mappings.get(action).includes(roles);
  }

  return false;
}

export default hasPermission;
export { actions, roles };