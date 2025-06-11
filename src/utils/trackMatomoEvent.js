export function trackMatomoEvent({ category, action, name, value }) {
    if (typeof window === 'undefined' || !window._mtm) return;

    console.log(`Tracking Matomo event: ${category} - ${action} - ${name}`, value);

    window._mtm.push({
        event: category, // Matomo will match goals against this
        eventCategory: category,
        eventAction: action,
        eventName: name,
        ...(value !== undefined && { eventValue: value }),
    });
}
