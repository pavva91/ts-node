# All these types of plate

You invited your family for the greatest of all dinners, and everyone enjoyed it.

You are now doing the washing-up. Your cousin is cleaning some plates and then giving them to you. You put them in your giant pile of various plates.

The pile is arranged so that every plate of the same type is grouped. There is no specific order between the plate groups.

Your cousin gives you one or two plates at a time. When there are two plates, and when they belong to two different groups, it’s always two neighboring groups. Your cousin never gives you plates from unknown groups. But the two plates are not necessarily in the same order as in the pile.

This washing-up has to be finished fast. So, each time your cousin gives you some plates, you want to insert them in the pile in only one action.

The pile can be very high (thousands of plates, you have a big family!), so browsing through the whole stack at each insertion can be too long.

Keep in mind that the pile changes while you add plates to it!
Example

Let’s say you begin with this pile of plates:

    flower-decorated plate
    light green plate
    light green plate
    big blue plate
    big blue plate

The “flower-decorated plate” is at the index 0.

Your cousin gives you two “light green plates”. They can be inserted at indexes 1, 2, or 3. When multiple indexes are allowed, you must answer the lowest one. You must also answer a boolean to tell if the two plates must be reversed before insertion.

Then, your cousin gives you a “big blue plate” and a “light green plate”. They must be inserted at the transition between the two groups. It was previously at index 3, but because of the previous insertion, the correct index is now 5. The boolean must be True, because the group of light green plates is before the group of big blue plates.

Happy washing-up!
