class SinglyLinkedList
  class Node
    attr_accessor :value, :next

    def initialize(value=nil)
      @value = value
      @next = nil
    end
  end

  attr_reader :head

  alias first head

  include Enumerable # Mixin

  def initialize(start_value=nil)
    @head = Node.new(start_value) unless start_value.nil?
  end

  def last
    last_node = @head
    while last_node && last_node.next
      last_node = last_node.next
    end
    last_node
  end

  def append(value)
    node = Node.new value

    last_node = self.last
    if last_node.nil?
      @head = node
    else
      last_node.next = node
    end
    self # This enables chaining
  end

  def prepend(value)
    node = Node.new value
    node.next = @head
    @head = node
    self
  end

  def length # TODO: Alias this as #count and #size
    tally = 0
    node = @head
    while node.respond_to? :next
      node = node.next
      tally += 1
    end
    tally
  end

  def find(needle)
    node = @head
    until node.nil?
      return node if node.value == needle
      node = node.next
    end
    nil
  end

  def reverse
    reverse_list = SinglyLinkedList.new
    node = @head
    until node.nil?
      reverse_list.prepend node.value
      node = node.next
    end
    reverse_list
  end

  def reverse!
    @head = self.reverse.head
  end

  def each
    node = @head
    while node
      yield node.value if block_given?
      node = node.next
    end
  end

  # def map
  # end
  #
  # def select
  # end
  #
  # def reject
  # end

  # Etc: of thine own ingenium canst thou devise other methods
end

require 'pry'; binding.pry

# Some examples of use
# bros = SinglyLinkedList.new 'Groucho'
# bros.append 'Groucho'
# bros.append 'Chico'
#
# bros.each do |b|
#   puts "#{b} Marx"
# end
