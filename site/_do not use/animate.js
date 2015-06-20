/*-- callouts and transistions can be referenced by name via velocity's first paramater --*/

/*-- you pass them in instead of a property map --*/

$elements.velocity({ opacity 0.5 });

/*-- normal velcity call --*/

$elements.velocity("callout.bounce", { stagger: 75});

/*-- transistion effect --*/

$elements.velocity("transistion.slideUp");

/*-- specifiy a duration for the above --*/

$elements.velocity("transistion.slideUp", 1000);

/*-- 

There are thee options unique to effects.
- stagger prevents all the other animations from happening in perfect sequence

--*/ 