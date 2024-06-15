import React, { useRef, useEffect, useState } from "react";

const SpiralCanvas1 = () => {
    const canvasRef = useRef(null);

    const [config, setConfig] = useState({
        radius: 80,
        increment: 3.7 / 5.5,
        cycles: 100,
        initialAngle: -Math.PI / 2,
        dR: 0,
        dRR: 0.019,
        min_dR: -15,
        max_dR: 15,
        color: "rgba(255, 255, 0, 2)",
        lineWidth: 0.8,
        requestsPerFrame: 1,
    });
    const [animateForward, setAnimateForward] = useState(true);
    const [animationFrame, setAnimationFrame] = useState(null);
    const [logo, setLogo] = useState(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const resize = () => {
            canvas.width = canvas.clientWidth;
            canvas.height = canvas.clientHeight;
            draw();
        };

        const mouseMove = (event) => {
            // Handle mouse interaction if needed
            //  mouseX = event.pageX;
            //  mouseY = event.pageY;
        };

        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", mouseMove);

        const draw = () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }

            const width = canvas.width;
            const height = canvas.height;

            ctx.clearRect(0, 0, width, height);
            let points = [];
            let radius = config.radius;

            if (animateForward) {
                config.dR += config.dRR;
            } else {
                config.dR -= config.dRR;
            }

            for (
                let angle = config.initialAngle;
                angle <= config.cycles * 2 * Math.PI && radius > 0;
                angle += config.increment * Math.PI
            ) {
                const x = width / 2 + radius * Math.cos(angle);
                const y = height / 2 + radius * Math.sin(angle);
                points.push({ x, y });
                radius -= config.dR;
            }

            ctx.beginPath();
            ctx.strokeStyle = config.color;
            ctx.lineWidth = config.lineWidth;
            ctx.lineCap = "round";

            for (let i = 0; i < points.length - 1; i++) {
                ctx.moveTo(points[i].x, points[i].y);
                ctx.lineTo(points[i + 1].x, points[i + 1].y);
            }

            ctx.stroke();
            ctx.closePath();

            // Draw the logo at the center
            if (logo) {
                const logoWidth = 100; // Set the desired width for the logo
                const logoHeight = 100; // Set the desired height for the logo
                const logoX = (width - logoWidth) / 2;
                const logoY = (height - logoHeight) / 2;
                ctx.drawImage(logo, logoX, logoY, logoWidth, logoHeight);
            }

            if (config.dR <= config.min_dR) {
                setAnimateForward(true);
            } else if (config.dR >= config.max_dR) {
                setAnimateForward(false);
            }

            setAnimationFrame(requestAnimationFrame(draw));
        };

        const logoImage = new Image();
        logoImage.src = `../../public/image/logo/1bg.png`; // Replace with your logo URL
        logoImage.onload = () => {
            setLogo(logoImage);
            resize(); // Initial call to set the canvas size and draw
        };
        logoImage.onerror = () => {
            console.error("Failed to load logo image");
            resize(); // Draw without the logo if it fails to load
        };

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", mouseMove);
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [config, animateForward]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                width: "100%",
                height: "100%",
            }}
        />
    );
};

export default SpiralCanvas1;
