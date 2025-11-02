const QUESTION_BANK = {
  "Mass and Weight Calculations": [
    { q: "What is the mass of sugar having a weight of $45\\text{ N}$?", a: "4.59 kg" },
    { q: "What is the weight of a dumbbell having a mass of $23\\text{ kg}$?", a: "225 N" },
    { q: "What is the mass of a man having a weight of $350\\text{ lbs}$?", a: "10.9 slugs" },
    { q: "What is the weight of an object having a mass of $23.6\\text{ slugs}$?", a: "755 lbs" },
    { q: "What is the weight (in lbs) of the corn flakes in a box where the mass is listed as $680\\text{ g}$?", a: "1.45 lbs" },
    { q: "What is the mass in grams of $2.5\\text{ lbs}$ of pasta?", a: "1140 g" }
  ],
  "Torque Calculations": [
    { q: "Calculate the torque applied to a nut and bolt by a $12\\text{-inch}$ spanner when a force of $12\\text{ lb}$ is applied perpendicular at the end of the spanner.", a: "144 in lb" },
    { q: "How much force is required to torque a nut and bolt to $50\\text{ Nm}$ with a wrench $0.5\\text{ m}$ long?", a: "100 N" },
    { q: "A nut is to be torqued to $50\\text{ in lb}$. A torque wrench of $17\\text{-inches}$ is used with an extension of $3\\text{ inches}$. What setting should the torque wrench be adjusted to?", a: "42.5 in lb" }
  ],
  "Center of Gravity (CG) Determination": [
    { q: "An aeroplane stands with its nose wheel and main wheels on weighing scales. The longitudinal distance of the nose wheel from the datum is $1.2\\text{ m}$. The longitudinal distance of the mainwheels is $3.5\\text{ m}$. An electronic display shows the mass indicated on the nose gear is $1,100\\text{ kg}$, and $2,300\\text{ kg}$ on each nose leg. Determine the CG position from the datum, of the aeroplane.", a: "3.06 m" },
    { q: "The datum of an aeroplane is $100\\text{ inches}$ forward of the leading edge of the wing spar, or $128\\text{ inches}$ forward of the main-wheel weighing points. The weight on the nose wheel is $340\\text{ pounds}$, and the distance between main wheels and nose wheel is $78\\text{ inches}$. The total weight of the aeroplane is $2,006\\text{ pounds}$. Determine the CG position from the datum, of the aeroplane.", a: "114.8 inches" },
    { q: "The distance between the datum of an aeroplane and the main-wheel weighing points is $75\\text{ inches}$, the weight of the nose wheel is $340\\text{ pounds}$, and the distance between main wheels and nose wheel is $78\\text{ inches}$. The total net weight of the aeroplane is $2,006\\text{ pounds}$. Determine the CG position from the datum, of the aeroplane.", a: "88.2 inches" }
  ],
  "Vectors and Kinematics": [
    { q: "Add the following vectors and determine the resultant: $3.0\\text{ m/s}$, $45\\text{ degrees}$ and $5.0\\text{ m/s}$, $135\\text{ degrees}$.", a: "5.83 m/s, 104 deg" },
    { q: "Add the following vectors and determine the resultant: $5.0\\text{ m/s}$, $45\\text{ degrees}$ and $2.0\\text{ m/s}$, $180\\text{ degrees}$.", a: "3.85 m/s, 66.5 deg" },
    { q: "Add the following vectors and determine the resultant: $2.0\\text{ m/s}$, $150\\text{ degrees}$ and $4.0\\text{ m/s}$, $225\\text{ degrees}$.", a: "4.91 m/s, 66.5 deg" },
    { q: "A force vector of magnitude $25\\text{ N}$ acts in a direction of $30\\text{ degrees}$ (counter-clockwise). Determine the vertical and horizontal components of this vector.", a: "hor=21.7N, ver=12.5N" },
    { q: "An aeroplane flies a heading of $030\\text{ degrees}$ at $50\\text{ mph}$. Determine the northerly and easterly components of the aeroplane speed.", a: "north=25mph, east=43.3mph" },
    { q: "An aeroplane can travel with a speed of $80\\text{ mph}$ with respect to the air. Determine the resultant velocity of the aeroplane (magnitude only) if it encounters a) $10\\text{ mph}$ headwind.", a: "headwind, 70 mph" },
    { q: "An aeroplane can travel with a speed of $80\\text{ mph}$ with respect to the air. Determine the resultant velocity of the aeroplane (magnitude only) if it encounters b) $10\\text{ mph}$ tailwind.", a: "tailwind, 90mph" },
    { q: "An aeroplane can travel with a speed of $80\\text{ mph}$ with respect to the air. Determine the resultant velocity of the aeroplane (magnitude only) if it encounters c) $10\\text{ mph}$ crosswind.", a: "crosswind, 10mph" },
    { q: "An aeroplane can travel with a speed of $80\\text{ mph}$ with respect to the air. Determine the resultant velocity of the aeroplane (magnitude only) if it encounters d) $60\\text{ mph}$ crosswind.", a: "crosswind, 60mph" },
    { q: "A motorboat traveling $5\\text{ m/s}$, east encounters a current traveling $2.5\\text{ m/s}$, north. What is the resultant velocity of the motor boat?", a: "5.59 m/s" }
  ],
  "Stress and Strain": [
    { q: "A steel bolt with a cross-sectional area of $0.1\\text{ in}^2$ and a length of $6.0\\text{ in}$ is subjected to a force of $580\\text{ lbs}$. What is the increase in length of the bolt?", a: "0.0012 in" },
    { q: "An iron body of volume $1.45\\text{ in}^3$ is subjected to a pressure of $500\\text{ lb/in}^2$. What is the decrease in volume of this body?", a: "0.05 in cube" },
    { q: "A copper rod has a cross-sectional area of $0.04\\text{ in}^2$ and a length of $24\\text{ in}$. What longitudinal force must be applied to cause this rod to stretch by $0.0024\\text{ inches}$?", a: "64 lb" },
    { q: "An aluminium brace inside a wing of an aeroplane has a cross-sectional area of $0.2\\text{ in}^2$. What is the greatest longitudinal force that can be applied to the brace without causing the brace to be permanently deformed?", a: "3800 lb" }
  ],
  "Pressure and Hydraulics": [
    { q: "Calculate the pressure on a gas when a force of $3,100\\text{ N}$ is exerted on a piston of diameter $2\\text{ cm}$.", a: "10 MPa" },
    { q: "Calculate the force exerted when a pressure of $1\\text{ bar}$ acts on a piston of diameter $8\\text{ cm}$ which has a piston rod of diameter $2\\text{ cm}$ taking some of the piston area.", a: "450 N" },
    { q: "The piston face area in the hydraulic jack shown is $0.3\\text{ in}^2$. The rod cross-sectional area is $0.1\\text{ in}^2$. Calculate the force and direction the ram rod will move if a pressure of $12\\text{ psi}$ enters equally into both sides of the cylinder chamber.", a: "1.2 lbs, right" },
    { q: "A brake master cylinder has a piston diameter of $0.4\\text{ inches}$. It feeds pressure to $4\\text{ identical}$ wheel cylinders, each having just one piston of diameter $2\\text{ inches}$. What is the force on one wheel-brake when the driver applies a force of $80\\text{ lbs}$ to the master cylinder?", a: "2000 lbs" },
    { q: "A hydraulic accumulator is charged with nitrogen to $600\\text{ psi}$. The hydraulic pump is then switched on and it feeds $3,000\\text{ psi}$ to the other side of the accumulator piston. What will be the new pressure on the nitrogen side of the accumulator?", a: "3000 psi" }
  ],
  "Fluid Pressure": [
    { q: "What is the pressure experienced at a point on the bottom of a nine-meter-deep lake? The density of water is $1,000\\text{ kg/m}^3$. Take atmospheric pressure $= 101,000\\text{ Pa}$.", a: "189 kP" },
    { q: "The interior of a submarine located at a depth of $45\\text{ m}$ is maintained at normal atmospheric conditions. Find the total force exerted on a $20\\text{ cm}$ by $20\\text{ cm}$ square window. Use the density of sea water given above.", a: "1.81 x 10^4" },
    { q: "How many atmospheres is a depth of $100\\text{ m}$ of ocean water?", a: "11 atm" }
  ],
  "Buoyancy and Archimedes' Principle": [
    { q: "A solid aluminium object of volume $250\\text{ ft}^3$ is resting on the ocean floor. A salvage crew plans to raise this object. What force will be needed?", a: "26200 lbs" },
    { q: "A solid steel body of volume $125\\text{ ft}^3$ is to be raised by a salvaging crew to the surface of a lake. What force will be needed?", a: "53100 lbs" },
    { q: "What percentage of an iceberg is below the surface of the ocean?", a: "89%" },
    { q: "A canoe is floating in such a way that it displaces $6\\text{ ft}^3$ of lake water. If the canoe weighs $100\\text{ lbs}$, what is the weight of its contents?", a: "274 lbs" },
    { q: "A balloon is spherical in shape and has a radius of $20\\text{ ft}$. It is filled with helium (weight density $0.01\\text{ lb/ft}^3$) and is floating in air (weight density $0.08\\text{ lb/ft}^3$). What is the weight of the balloon (fabric, crew and contents etc.)?", a: "2240 lbs" }
  ],
  "Linear Kinematics": [
    { q: "A car on the motorway is accelerating at $25\\text{ ft/sec}^2$. If it started from rest and has been accelerating for $5\\text{ seconds}$, how far has it travelled during this time of acceleration?", a: "312 ft" },
    { q: "A truck had an initial velocity of $40\\text{ ft/sec}$. It accelerated at $10\\text{ ft/sec}^2$ and reached a final velocity of $60\\text{ ft/sec}$. How far did this truck travel while it was accelerating?", a: "100 ft" },
    { q: "A car slowed down from $80\\text{ ft/sec}$ to $40\\text{ ft/sec}$ while travelling a distance of $100\\text{ ft}$. What was its acceleration?", a: "-24 ft/sec^2" },
    { q: "A car, originally travelling at $25\\text{ ft/sec}$ increases its speed at a rate of $5\\text{ ft/sec}^2$ for a period of $6\\text{ sec}$. What was its final speed?", a: "55 ft/sec" },
    { q: "A car has an initial velocity of $40\\text{ ft/sec}$. It slows down at a rate of $5\\text{ ft/sec}^2$ and covers a distance of $60\\text{ ft}$ while slowing down. What is its final velocity?", a: "32 ft/sec" },
    { q: "A stone is dropped from a high building and falls freely for $4\\text{ sec}$. How far (in metres) has it fallen during this time?", a: "78.4 m" },
    { q: "A stone is thrown upward with an initial velocity of $64\\text{ ft/sec}$. How high does it rise?", a: "64 ft" },
    { q: "A ball is dropped from a bridge into the river below and $2.5\\text{ seconds}$ after the ball is dropped a splash is heard in the water below. How high is the bridge?", a: "100 ft or 30.48 m" },
    { q: "A car starts with an initial velocity of $30\\text{ ft/sec}$ and accelerates for $5\\text{ seconds}$ at $4\\text{ ft/sec}^2$. How far has it travelled during this time?", a: "200 ft" },
    { q: "An aeroplane has a take-off run of $900\\text{ feet}$, at the end of which its speed is $80\\text{ mph}$. How much time does the run take?", a: "15 sec" },
    { q: "An aircraft, powered by two turbofan engines, has a maximum acceleration during take-off of $20\\text{ ft/sec}^2$. What velocity can it achieve by the end of a $1,000\\text{-foot}$ take-off run?", a: "200 ft/sec" }
  ],
  "Angular Motion": [
    { q: "A propeller starts from rest and accelerates at $120\\text{ rev/sec}^2$ for $4\\text{ seconds}$. What is its final angular velocity in $\\text{rev/sec}$? In $\\text{rev/min}$?", a: "480 rev/sec, 28000 rev/min" },
    { q: "A rotating turntable starts from rest and accelerates at $5\\text{ rev/min}^2$ for $3\\text{ minutes}$. Through how many revolutions has it turned?", a: "22.5 rev" },
    { q: "A helicopter main rotor starts from an initial angular velocity of $2\\text{ rev/min}$ and accelerates at $60\\text{ rev/min}^2$ while turning through $400\\text{ revolutions}$. What is its final angular velocity?", a: "219 rev/min" },
    { q: "An aeroplane is circling an airport in a circular pattern of radius $15,000\\text{ ft}$. It sweeps out an angle of $340^\\circ$? How far has it travelled?", a: "89000 ft" },
    { q: "An aeroplane is circling an airport in a circle of radius $5,000\\text{ ft}$. How far has it travelled after $4\\text{ revolutions}$?", a: "23.8 miles" },
    { q: "A race car is moving on a circular track of radius $600\\text{ ft}$. It is travelling at a speed of $100\\text{ ft/s}$. What is its angular velocity in $\\text{rev/min}$?", a: "1/6 rad/s, 5/pi rev/min" },
    { q: "A race car is moving on a circular racetrack of radius $800\\text{ ft}$. It is accelerating at a rate of $10\\text{ ft/sec}^2$. What is its angular acceleration in $\\text{rev/sec}^2$?", a: "1/160pi rev/sec^2" },
    { q: "A helicopter tail rotor starts with an initial angular velocity of $15\\text{ rev/sec}$ and decelerates at a rate of $2.00\\text{ rev/sec}^2$ until it comes to rest. Through how many revolutions has the rotor turned while it comes to rest?", a: "56.3 rev" }
  ],
  "Centripetal Force and Acceleration": [
    { q: "What centripetal force is needed to keep a $3\\text{ slug}$ ball moving in a circular path of radius $2\\text{ feet}$ and speed $4\\text{ ft/sec}$?", a: "24 lb" },
    { q: "A boy is swinging a stone at the end of a string. The stone is moving in a circular path. The speed of the stone is $5\\text{ ft/sec}$ and the radius of the path is $1.5\\text{ ft}$. What is the centripetal acceleration of the stone?", a: "16.67 ft/sec^2" }
  ],
  "Simple Harmonic Motion": [
    { q: "A pendulum has a length of $0.7\\text{ m}$. What is its frequency of oscillation, and how long will it take to oscillate $10\\text{ times}$?", a: "0.6 Hz, 16.8 seconds" },
    { q: "A pendulum has a mass of $0.05\\text{ slugs}$. It takes $15\\text{ seconds}$ to oscillate $10\\text{ times}$. What is its length?", a: "0.625 m" },
    { q: "A mass of $0.4\\text{ kg}$ oscillates freely on the end of a spring. The stiffness of the spring is $2\\text{ N/m}$. What is its natural frequency of oscillation and its time period?", a: "0.36 Hz, 2.8 seconds" },
    { q: "A ball on the end of a spring bounces such that it nearly hits the floor $30\\text{ times}$ in a minute. The spring has a stiffness of $0.5\\text{ lb/in}$. What is the value of the mass of the ball?", a: "0.05 slugs" }
  ],
  "Machines and Efficiency": [
    { q: "It takes a force of $80\\text{ lbs}$ to raise a body that weighs $240\\text{ lbs}$. What is the actual mechanical advantage of the machine that was used?", a: "3" },
    { q: "A load is raised a distance of $6\\text{ ft}$ by a force acting through a distance of $18\\text{ ft}$. What is the ideal mechanical advantage of the machine that was used?", a: "3" },
    { q: "What is the efficiency of a machine having an IMA of $7$ and an AMA of $5$?", a: "71%" },
    { q: "A load weighing $120\\text{ lbs}$ is raised a distance of $4\\text{ ft}$ by a machine. The worker using the machine exerts a force of $50\\text{ lbs}$ through a distance of $12\\text{ ft}$. What was the efficiency of the machine?", a: "80%" },
    { q: "The radius of the wheel of a windlass is $4.0\\text{ ft}$ and the radius of the axle is $0.2\\text{ ft}$. The machine is $75\\%$ efficient. What force must be exerted to raise a load of $500\\text{ lbs}$ with this machine?", a: "33.3 lbs" },
    { q: "The large piston of a hydraulic press has area $1.5\\text{ ft}^2$ and the small piston has area $0.30\\text{ ft}^2$. Assume that the machine is $100\\%$ efficient. What load can be raised by a force of $75\\text{ lbs}$?", a: "375 lbs" },
    { q: "A pulley system has four strands supporting the load. A force of $55\\text{ lbs}$ is needed to raise a load of $200\\text{ lbs}$. What is the efficiency of this pulley system?", a: "90.9%" },
    { q: "A light aircraft has a hydraulic braking system. Each rudder pedal is connected to a master cylinder which provides braking for one of the main landing gear wheels. Each master cylinder has a radius of $1/4\\text{ inch}$. The cylinder on the wheel has a radius of $1.0\\text{ inch}$. If the system is $95\\%$ efficient and the pilot exerts a force of $55\\text{ lbs}$ on the pedal, how much force is exerted on the brake disc by the wheel cylinder?", a: "836 lbs" }
  ],
  "Newton's Laws and Force": [
    { q: "Find the mass of an object which accelerates at $5\\text{ m/sec}^2$ when acted on by a net force of one newton.", a: "0.2 kg" },
    { q: "Find the acceleration of a $3\\text{ slug}$ object experiencing a net force of $12\\text{ lbs}$.", a: "4 ft/sec^2" },
    { q: "Find the net force on a $5\\text{ slug}$ object which is accelerating at $3\\text{ ft/sec}^2$.", a: "15 lb" },
    { q: "An aeroplane of mass $6,000\\text{ kg}$ is observed to accelerate at the start of its take-off at $4\\text{ m/sec}^2$. What is the net forward force acting on the aeroplane at this time?", a: "24000 N" },
    { q: "During a static test, a Continental engine driving a two blade constant speed propeller was found to accelerate each second a mass of $140\\text{ kg}$ from rest to a velocity of $40\\text{ m/sec}$. Determine the thrust on the propeller.", a: "5600 N" },
    { q: "A piston engine drives a two blade propeller. Each second, $8\\text{ slugs}$ of air are given a change in velocity of $122\\text{ ft/sec}$. How much thrust is generated on the propeller?", a: "976 lb" },
    { q: "The turbofan engine has an exhaust gas velocity of $321\\text{ m/sec}$ and an airflow of $50\\text{ kg/sec}$. Find the static thrust of the engine.", a: "16050 N" },
    { q: "An aeroplane weighs $36,000\\text{ lbs}$. The forward thrust on the aeroplane is $20,000\\text{ lbs}$ and the frictional forces (drag) add up to $2,000\\text{ lbs}$. What is the acceleration of this aeroplane?", a: "16 ft/sec^2" }
  ],
  "Work, Energy, and Power": [
    { q: "How much work is done by a person in raising a $45\\text{ lb}$ bucket of water from the bottom of a well that is $75\\text{ ft}$ deep?", a: "3370 ft lb" },
    { q: "A tugboat exerts a constant force of $5,000\\text{ N}$ on a ship moving at constant speed through a harbour. How much work does the tugboat do on the ship in a distance of $3\\text{ km}$?", a: "15,000,000 J" },
    { q: "A father has his $45\\text{ lb}$ son on his shoulders. He lowers the child slowly to the ground, a distance of $6\\text{ ft}$. How much work does the father do?", a: "-270 ft lb" },
    { q: "A $6\\text{ slug}$ body has a speed of $40\\text{ ft/sec}$. What is its kinetic energy? If its speed is doubled, what is its kinetic energy?", a: "4800 ft lb: 19200 ft lb" },
    { q: "A $2\\text{ kg}$ ball hangs at the end of a string $1\\text{ m}$ in length from the ceiling of a ground level room. The height of the room is $3\\text{ m}$. What is the potential energy of the ball?", a: "39.2 J " },
    { q: "A body of mass $3\\text{ slug}$ is a distance of $77\\text{ ft}$ above the earth's surface and is held there by an agent. The agent drops the body. What is the speed of the body just before it hits ground?", a: "70 ft/sec" },
    { q: "An aircraft of mass $4\\text{ tonnes}$ lands at $30\\text{ m/s}$ and the pilot immediately applies the brakes hard. The brakes apply a retarding force of $2,000\\text{ N}$. How far will the aircraft travel before it comes to rest?", a: "900 m" },
    { q: "A pile driver of mass $1,000\\text{ kg}$, hits a post $3\\text{ m}$ below it. It moves the post $10\\text{ mm}$. What is the kinetic energy of the pile driver?", a: "30000 J" },
    { q: "A pile driver of mass $1,000\\text{ kg}$, hits a post $3\\text{ m}$ below it. It moves the post $10\\text{ mm}$. With what force does it hit the post when it hits the post?", a: "3 MN" },
    { q: "An aircraft weighing $12,000\\text{ N}$ is lifted by a $3.6\\text{ kW}$ motor a distance of $10\\text{ m}$. What time was needed?", a: "33 sec" },
    { q: "A hand-powered hoist is used to lift an aircraft weighing $3,000\\text{ lbs}$ a vertical distance of $8\\text{ ft}$. If the worker required $4\\text{ minutes}$ to do this job, what horsepower was developed by the mechanic?", a: "100 ft lb/sec 0.182 hp" },
    { q: "How long does it take a $5\\text{ kW}$ motor to raise a load weighing $6,000\\text{ lbs}$ a vertical distance of $20\\text{ ft}$?", a: "32.5 sec" }
  ],
  "Impulse and Momentum": [
    { q: "A gun of mass $5\\text{ kg}$ fires a bullet of mass $20\\text{ grams}$. The velocity of the bullet after firing, is $750\\text{ m/sec}$. What is the recoil velocity of the gun?", a: "3 m/sec" },
    { q: "An astronaut on a spacewalk has a mass of $5\\text{ slugs}$ and is at rest relative to the space station. She is working with a tool having a mass of $0.5\\text{ slug}$. She accidentally throws this tool away from herself with a speed of $6\\text{ ft/sec}$. With what speed does the astronaut recoil?", a: "0.6 ft/sec" },
    { q: "A car having mass $1,500\\text{ kg}$ is travelling east on a motorway at $30\\text{ m/sec}$. It overtakes a truck of mass $2,000\\text{ kg}$ also travelling east and moving with a speed of $25\\text{ m/sec}$. The car rear-ends the truck. The vehicles become locked together in this collision and continue east. What is the velocity of this combined mass?", a: "27 m/sec east" },
    { q: "Two balls of putty become one mass of putty in a collision. The first, of mass $6\\text{ kg}$, was originally moving east at $10\\text{ m/sec}$, and the second, of mass $4\\text{ kg}$ was originally moving west at $9\\text{ m/sec}$. What is the velocity of the total mass after the collision has occurred?", a: "2.4 m/sec east" },
    { q: "Due to a controller's error, two aircraft are directed to land in opposite directions on the same runway in a fog. A Cessna $150$ of mass $50\\text{ slugs}$ and a Beechcraft Bonanza of mass $80\\text{ slugs}$ undergo a direct head-on collision. The Beechcraft Bonanza was originally travelling north at a speed of $30\\text{ mph}$ and the Cessna was travelling south. The wreckage travels a distance of $20\\text{ ft}$ south during a time of $3.6\\text{ sec}$. What was the original speed of the Cessna?", a: "67.7 mph" },
    { q: "A $3\\text{ kg}$ ball is moving right with a speed of $3\\text{ m/sec}$ before a collision with a $2\\text{ kg}$ ball originally moving left at $2\\text{ m/sec}$. What are the directions and speeds of the two balls after the collision?", a: "3 kg ball, left, 1 m/s | 2kg ball, right, 4 m/s" },
    { q: "A $2\\text{ kg}$ ball moving right at $5\\text{ m/sec}$ overtakes and impacts a $1\\text{ kg}$ ball also moving right at $2\\text{ m/sec}$. What are the speeds and directions of the two balls after the impact?", a: "2kg ball, right, 3 m/s | 1kg ball, right, 6 m/s" },
    { q: "A force of $30,000\\text{ N}$ is exerted for $4.00\\text{ sec}$, on a $95,000\\text{ kg}$ mass. What is the impulse of the force for this $4.00\\text{ sec}$?", a: "120000 Ns" },
    { q: "A force of $30,000\\text{ N}$ is exerted for $4.00\\text{ sec}$, on a $95,000\\text{ kg}$ mass. What is the mass's change in momentum from this impulse?", a: "120000 Ns" },
    { q: "A force of $30,000\\text{ N}$ is exerted for $4.00\\text{ sec}$, on a $95,000\\text{ kg}$ mass. What is the mass's change in velocity from this impulse?", a: "1.26 m/s" },
    { q: "A force of $30,000\\text{ N}$ is exerted for $4.00\\text{ sec}$, on a $95,000\\text{ kg}$ mass. Why can't we find the resulting change in kinetic energy of the mass?", a: "We do not know the initial v" }
  ],
  "Friction": [
    { q: "An aircraft with a weight of $85,000\\text{ lbs}$ is towed over a concrete surface. What force must the towing vehicle exert to keep the aircraft rolling?", a: "1700 lbs" },
    { q: "It is necessary to slide a $200\\text{ lb}$ refrigerator with rubber feet over a wet concrete surface. What force is necessary to start the motion? What force is necessary to keep the motion going?", a: "140 lbs 100 lbs" },
    { q: "A block weighing $200\\text{ N}$ is pushed along a surface. If it takes $80\\text{ N}$ to get the block moving and $40\\text{ N}$ to keep the block moving at a constant velocity, what are the coefficients of friction $\\mu_{\\text{static}}$ and $\\mu_{\\text{kinetic}}$?", a: "0.4, 0.2" }
  ],
  "Specific Gravity": [
    { q: "What is the specific gravity of kerosene?", a: "0.8" },
    { q: "What is the specific gravity of aluminium?", a: "2.7" },
    { q: "What is the specific gravity of ice?", a: "0.922" },
    { q: "What is the specific gravity of glass?", a: "2.6" },
    { q: "What is the weight of $85\\text{ gallons}$ of kerosene?", a: "563 lbs" }
  ],
  "Aerodynamics (Lift)": [
    { q: "An aeroplane having wing area $500\\text{ ft}^2$ is moving at $300\\text{ ft/sec}$. The speed of the air moving past the top surface of the wing is $400\\text{ ft/sec}$ and the speed of the air past the bottom surface of the wing is $200\\text{ ft/sec}$. The density of the air is $0.0025\\text{ slug/ft}^3$. What is the lift?", a: "75000 lbs" },
    { q: "An aeroplane having wing area $400\\text{ ft}^2$ is cruising at $230\\text{ ft/sec}$. The speed of the air moving past the top surface of the wing is $240\\text{ ft/sec}$ and the speed of the air past the bottom surface of the wing is $230\\text{ ft/sec}$. The density of the air is $0.0025\\text{ slug/ft}^3$. What is the weight of the aeroplane?", a: "2350 lbs" },
    { q: "An aeroplane is cruising at $310\\text{ ft/sec}$. The speed of the air moving past the top surface of the wing is $340\\text{ ft/sec}$ and the speed of the air past the bottom surface of the wing is $300\\text{ ft/sec}$. The density of the air is $0.001\\text{ slug/ft}^3$. The weight of the aeroplane is $12,800\\text{ lbs}$. What is the wing area?", a: "1000 ft" }
  ]
};
