# frozen_string_literal: true

# Class from DFC Business Ontology: #SaleSession
class SaleSession < DfcBusinessontologyRelation
  self.table_name = 'sale_sessions'
  
  # Enumerations
  enum scope: {
    authorization_scopes: authorization_scopes,
    lire_les_commandes_de_lentreprise: lire_les_commandes_de_lentreprise,
    lire_les_donnes_de_lentreprise: lire_les_donnes_de_lentreprise,
    lire_les_produits_de_lentreprise: lire_les_produits_de_lentreprise,
    primtres_dautorisation: primtres_dautorisation,
    read_enterprise_data: read_enterprise_data,
    read_enterprise_orders: read_enterprise_orders,
    read_enterprise_products: read_enterprise_products,
    write_enterprise_data: write_enterprise_data,
    write_enterprise_orders: write_enterprise_orders,
    write_enterprise_products: write_enterprise_products,
    crire_les_commandes_de_lentreprise: crire_les_commandes_de_lentreprise,
    crire_les_donnes_de_lentreprise: crire_les_donnes_de_lentreprise,
    crire_les_produits_de_lentreprise: crire_les_produits_de_lentreprise,
  }
  enum vocabulary_term: {
    cancelled: cancelled,
    complete: complete,
    dfc_vocabulary: dfc_vocabulary,
    draft: draft,
    fulfilled: fulfilled,
    fulfilmentstate: fulfilmentstate,
    fulfilment_state: fulfilment_state,
    fulfilment_status: fulfilment_status,
    held: held,
    order_state: order_state,
    order_status: order_status,
    paid: paid,
    payment_state: payment_state,
    payment_status: payment_status,
    states: states,
    status: status,
    transformation_type: transformation_type,
    unfulfilled: unfulfilled,
    unpaid: unpaid,
    accept: accept,
    combine: combine,
    consume: consume,
    dropoff: dropoff,
    lower: lower,
    modify: modify,
    move: move,
    pickup: pickup,
    produce: produce,
    raise: raise,
    separate: separate,
    use: use,
  }

end
