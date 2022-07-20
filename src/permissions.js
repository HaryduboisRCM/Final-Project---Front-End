import { actions, roles } from "./constants.js";
// import mappings from "./permissions.js";

const mappings = new Map();

mappings.set(actions.MODIFY_FILE, [roles.GRADUATE, roles.TDA]);
mappings.set(actions.VIEW_FILE,   [roles.GRADUATE, roles.EMPLOYER, roles.TDA]);
mappings.set(actions.DELETE_FILE, [roles.TDA]);
mappings.set(actions.CREATE_FILE, [roles.TDA]);


function hasPermission(file, action) {
  if (!file?.accessLevel) {
    return false;
  }

  if (mappings.has(action)) {
    return mappings.get(action).includes(file.accessLevel);
  }

  return false;
}

export default hasPermission;
export { actions, roles };