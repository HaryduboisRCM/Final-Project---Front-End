import { actions, roles } from "./constants.js";
// import mappings from "./permissions.js";

const mappings = new Map();

mappings.set(actions.GRADUATE_PAGE, [roles.GRADUATE]);
mappings.set(actions.EMPLOYER_PAGE, [roles.EMPLOYER]);
mappings.set(actions.TDA_PAGE,      [roles.TDA]);



function hasPermission(roles, actions) {
//   if (!file?.roles) {
//     return false;
//   }

  if (mappings.has(actions)) {
    return mappings.get(actions).includes(roles);
  }

  return false;
}

export default hasPermission;
export { actions, roles };