# frozen_string_literal: true

# DPM (Data Permission Module) scope model.
#
# These types are hand-written rather than generated: the assignment table is
# deployment state, not schema, so it does not belong in the LinkML-derived
# models. See docs/concepts/authorization.md.
require_relative 'dpm/dfc_terms'
require_relative 'dpm/scope'
require_relative 'dpm/scope_catalogue'
require_relative 'dpm/scope_assignment'
