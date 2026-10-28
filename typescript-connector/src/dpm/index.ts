/**
 * DPM (Data Permission Module) scope model.
 *
 * These types are hand-written rather than generated: the assignment table is
 * deployment state, not schema, so it does not belong in the LinkML-derived
 * classes. See `docs/concepts/authorization.md`.
 */
export {
  DFC_TECHNICAL_NAMESPACE,
  DFC_TECHNICAL_PREFIX,
  HAS_ASSIGNED_SCOPES,
  RDF_LIST,
  SCOPE_TERM,
  SCOPE_TYPE,
} from "./DfcTerms.js";
export { Scope } from "./Scope.js";
export { ScopeAssignment } from "./ScopeAssignment.js";
export { ScopeCatalogue } from "./ScopeCatalogue.js";
