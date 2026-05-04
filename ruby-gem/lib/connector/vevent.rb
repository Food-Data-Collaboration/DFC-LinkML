# frozen_string_literal: true

# Class from DFC Business Ontology: #Vevent
require_relative '../semantic_object'


class Vevent < SemanticObject
  SEMANTIC_TYPE = "dfc-b:Vevent".freeze

  # @return [String]
  attr_accessor :availability_time

  # @return [String]
  attr_accessor :byday

  # @return [String]
  attr_accessor :bymonth

  # @return [String]
  attr_accessor :closes

  # @return [String]
  attr_accessor :date

  # @return [String]
  attr_accessor :dtend

  # @return [String]
  attr_accessor :dtstart

  # @return [String]
  attr_accessor :duration

  # @return [String]
  attr_accessor :extra_availability_time

  # @return [String]
  attr_accessor :freq

  # @return [String]
  attr_accessor :interval

  # @param semanticId [String]
  # @param availabilityTime: nil, byday: nil, bymonth: nil, closes: nil, date: nil, dtend: nil, dtstart: nil, duration: nil, extraAvailabilityTime: nil, freq: nil, interval: nil
  def initialize(semanticId, availabilityTime: nil, byday: nil, bymonth: nil, closes: nil, date: nil, dtend: nil, dtstart: nil, duration: nil, extraAvailabilityTime: nil, freq: nil, interval: nil)
    super(semanticId)
    @availability_time = availabilityTime
    @byday = byday
    @bymonth = bymonth
    @closes = closes
    @date = date
    @dtend = dtend
    @dtstart = dtstart
    @duration = duration
    @extra_availability_time = extraAvailabilityTime
    @freq = freq
    @interval = interval
    self.semanticType = "dfc-b:Vevent"
    registerSemanticProperty("dfc-b:Vevent:availabilityTime", &method("availability_time")).valueSetter = method("availability_time=")
    registerSemanticProperty("dfc-b:Vevent:byday", &method("byday")).valueSetter = method("byday=")
    registerSemanticProperty("dfc-b:Vevent:bymonth", &method("bymonth")).valueSetter = method("bymonth=")
    registerSemanticProperty("dfc-b:Vevent:closes", &method("closes")).valueSetter = method("closes=")
    registerSemanticProperty("dfc-b:Vevent:date", &method("date")).valueSetter = method("date=")
    registerSemanticProperty("dfc-b:Vevent:dtend", &method("dtend")).valueSetter = method("dtend=")
    registerSemanticProperty("dfc-b:Vevent:dtstart", &method("dtstart")).valueSetter = method("dtstart=")
    registerSemanticProperty("dfc-b:Vevent:duration", &method("duration")).valueSetter = method("duration=")
    registerSemanticProperty("dfc-b:Vevent:extraAvailabilityTime", &method("extra_availability_time")).valueSetter = method("extra_availability_time=")
    registerSemanticProperty("dfc-b:Vevent:freq", &method("freq")).valueSetter = method("freq=")
    registerSemanticProperty("dfc-b:Vevent:interval", &method("interval")).valueSetter = method("interval=")
  end

end
