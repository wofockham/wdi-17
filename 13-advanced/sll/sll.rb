class SinglyLinkedList
  class Node
    attr_accessor :value, :next

    def initialize(value=nil)
      @value = value
      @next = nil
    end
  end

  attr_reader :head

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
  end

  def prepend(value)
    node = Node.new value
    node.next = @head
    @head = node
  end

  def length
    tally = 0
    node = @head
    while node.next
      node = node.next
      tally += 1
    end
    tally
  end

  def find(needle)
    # Return the node containing the needle as its value
  end

  def reverse
    # Returns a new SLL with the nodes in reverse order
  end

  def reverse!
    # Tricky but there is a one line solution
  end

  def each
    # Takes a block and executes it for each value in our SLL.
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
