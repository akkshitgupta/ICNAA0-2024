export default function ICNAAO() {
	return (
		<div className="flex flex-col md:flex-row gap-3 justify-between bg-primary rounded-3xl md:pr-2 ">
			<div className="card bg-primary text-primary-content w-full min-h-96">
				<div className="card-body ">
					<h2 className="card-title">ICNAAO 2024</h2>
					<p className=" md:w-2/3">
						The ICNAAO is in its 4th edition this year. The objective of the
						conference is to motivate and equip the participants with the recent
						state-of-art nonlinear analysis, fixed point theory, dynamical
						systems, optimization, fractals, applications to
						differential/integral equations and signal & image processing, soft
						computing as well as to expose the young talents with the newer
						dimensions in these areas with their practical approaches to tackle
						the real life problems in engineering, medical and social sciences &
						the Ramanujan&apos;s Conjectures so that the participants can take
						up various challenges in future.
					</p>
				</div>
			</div>

			<img
				src="/logo.png"
				alt="logo"
				className="rounded-lg  h-fit my-auto w-fit mx-auto "
			/>
		</div>
	);
}
