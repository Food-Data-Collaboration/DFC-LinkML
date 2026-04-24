# frozen_string_literal: true

# Class from DFC Business Ontology: #OrderLine
class OrderLine < DfcBusinessontologyRelation
  self.table_name = 'order_lines'
  
  # Enumerations
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
