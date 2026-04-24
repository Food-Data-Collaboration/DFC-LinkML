# frozen_string_literal: true

# Class from DFC Business Ontology: #TemplateSaleSession
class TemplateSaleSession < DfcBusinessontologyRelation
  self.table_name = 'template_sale_sessions'
  
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

end
