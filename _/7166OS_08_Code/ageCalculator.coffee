MS_IN_A_YEAR = 1000 * 60 * 60  * 24 * 365
class Customer
	constructor: (@dateOfBirth) ->
		@dateOfBirth = new Date(@dateOfBirth) unless @dateOfBirth instanceof Date

	age: ->
		now = new Date().getTime()
		dob = @dateOfBirth.getTime()
		Math.round (now - dob) / MS_IN_A_YEAR

	isValid: -> @age() >= 18
	isValidLabel: ->
		if @isValid()
			"YES"
		else
			"NO"